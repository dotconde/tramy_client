import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import useConfig from "../../hooks/useConfig";
import { postNote } from "../../services/api/chat";
import "./styles.css";

function NotePanel({ chatId, data }) {
  const { config } = useConfig();

  const [note, setNote] = useState("");

  // Function: Push message with enter key
  function handleKeyDown(event) {
    if (event.key === "Enter" && note) {
      sendNote();
    }
  }

  function sendNote() {
    mutate({ note: note });
    if (sendingNote) {
      return "Enviando mensaje ...";
    }
    setNote("");
  }

  const { isLoading: sendingNote, mutate } = useMutation(
    async (newNote) => postNote(chatId, newNote, config),
    {}
  );

  if (!data) {
    return <div>Cargando ...</div>;
  }

  return (
    <div>
      <div className="note-message">
        {data["notes"].map((note) => (
          <div className="note-message__box">{note.content}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Escribir mensaje..."
        value={note}
        onChange={(event) => setNote(event.target.value)}
        onKeyDown={handleKeyDown}
      ></input>
      <button type="submit" onClick={sendNote}>
        Enviar
      </button>
    </div>
  );
}

export default NotePanel;

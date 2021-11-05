import React, { useState } from "react";
import moment from "moment";
import { unixToFriendlyDate } from "../../helpers/formatters/date";
import { useMutation, useQueryClient } from "react-query";
import useConfig from "../../hooks/useConfig";
import { postNote } from "../../services/api/chat";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import "./styles.css";

function NotePanel({ chatId, data }) {
  const queryClient = useQueryClient();

  const { config } = useConfig();

  const { isLoading: sendingNote, mutate } = useMutation(
    async (newNote) => postNote(chatId, newNote, config),
    {
      onMutate: async (newNote) => {
        await queryClient.cancelQueries(["notes", chatId]);

        const previousNotes = queryClient.getQueryData(["notes", chatId]);

        queryClient.setQueryData(["notes", chatId], (oldNotes) => {
          let oldNotesCopy = oldNotes;

          oldNotesCopy.notes.push({
            author: queryClient.getQueryData("profile").email,
            content: note,
            timestamp: moment().unix(),
          });
          return oldNotesCopy;
        });
        return { previousNotes };
      },
    }
  );

  const [note, setNote] = useState("");

  // Function: Push message with enter key
  function handleKeyDown(event) {
    if (event.key === "Enter" && note.length > 0) {
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

  if (!data) {
    return <div>Cargando ...</div>;
  }

  return (
    <div className="note-panel">
      <div className="new-note">
        <textarea
          placeholder="Agregar nueva nota ..."
          value={note}
          onChange={(event) => setNote(event.target.value)}
          onKeyDown={handleKeyDown}
        ></textarea>
        <button type="submit" onClick={sendNote}>
          <PlusIcon />
        </button>
      </div>
      <div className="note-list">
        {data["notes"]
          .map((note) => (
            <div className="note-list__box">
              <span>
                <h1>{note.content}</h1>
                <p>
                  Creado por: <b>{note.author}</b>
                </p>
              </span>
              <h2>{unixToFriendlyDate(note.timestamp)}</h2>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
}

export default NotePanel;

import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { unixToFriendlyDate } from "../../helpers/formatters/date";
import { useMutation, useQueryClient } from "react-query";
import useConfig from "../../hooks/useConfig";
import { postNote } from "../../services/api/chat";
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

  const hookDiv = useRef(null);

  // Instant scroll down when chat is initialized
  useEffect(() => {
    hookDiv?.current?.scrollIntoView({ behavior: "instant" });
  }, [data]);

  // Smooth scroll down when new message is pushed
  useEffect(() => {
    hookDiv?.current?.scrollIntoView({ behavior: "smooth" });
  }, [sendingNote]);

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

  if (!data) {
    return <div>Cargando ...</div>;
  }

  return (
    <div>
      <div className="note-message">
        {data["notes"].map((note) => (
          <div className="note-message__box">
            <p>
              {note.content} - {note.author} -
              {unixToFriendlyDate(note.timestamp)}{" "}
            </p>
          </div>
        ))}
        <div
          style={{
            float: "right",
            clear: "both",
          }}
          ref={hookDiv}
        ></div>
      </div>
      <input
        type="text"
        placeholder="Escribir mensaje..."
        value={note}
        onChange={(event) => setNote(event.target.value)}
        onKeyDown={handleKeyDown}
      ></input>
      <button type="submit" onClick={sendNote}>
        Guardar nota
      </button>
    </div>
  );
}

export default NotePanel;

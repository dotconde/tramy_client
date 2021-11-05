import { useRef, useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import useConfig from "../../hooks/useConfig";
import {
  pipelinesToOptions,
  accountToOptions,
} from "../../helpers/formatters/select";
import { tramySelectStyles } from "../../constants/select";
import { getPipelines } from "../../services/api/pipeline";
import { getAccounts } from "../../services/api/account";
import {
  getTemplates,
  getNotes,
  updateChat,
  postMedia,
  postDocument,
} from "../../services/api/chat";
import { updateLead } from "../../services/api/lead";
import ChatMessage from "../UI/ChatMessage";
import ClientAvatar from "../ClientAvatar";
import Select from "react-select";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg";
import { ReactComponent as SmileIcon } from "../../assets/icons/smile.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";
import { ReactComponent as TemplateIcon } from "../../assets/icons/template.svg";
// import { ReactComponent as PdfIcon } from "../../assets/icons/pdf.svg";
import { ReactComponent as ClipIcon } from "../../assets/icons/clip.svg";
import { ReactComponent as ImageIcon } from "../../assets/icons/image.svg";
import Modal from "react-modal";
import TemplatePanel from "../TemplatePanel";
import NotePanel from "../NotePanel";

import "./styles.css";

function ChatWindow({
  currentChat,
  inputMessage,
  setInputMessage,
  pushMessage,
  isLoadingDeliveryMessage,
}) {
  // Handle template modal
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => setIsOpen(false);

  // Handle note modal
  const [noteIsOpen, setNoteIsOpen] = useState(false);

  const handleNoteModal = () => setNoteIsOpen(false);

  // Load notes
  function handleNoteList() {
    refetchNotes();
    setNoteIsOpen(true);
  }

  // Wrap chat attributes
  const attributes = currentChat?.attributes;

  // Config
  const { config } = useConfig();

  // Emoji
  const [showEmojis, setShowEmojis] = useState(false);

  // Ref to chat window bottom
  const hookDiv = useRef(null);

  // Instant scroll down when chat is initialized
  useEffect(() => {
    hookDiv.current.scrollIntoView({ behavior: "instant" });
  }, [currentChat?.attributes?.id]);

  // Smooth scroll down when new message is pushed
  useEffect(() => {
    hookDiv.current.scrollIntoView({ behavior: "smooth" });
  }, [isLoadingDeliveryMessage]);

  // Selector: Lead
  const leadId = attributes?.lead?.id;
  const stageToDefaultOption = {
    label: attributes?.current_stage?.name || "Sin etapa",
    value: attributes?.current_stage?.id,
  };

  const { data: pipelines } = useQuery(
    "pipelines",
    async () => getPipelines(config),
    {
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
    }
  );

  const { mutate: mutateLead } = useMutation(async (selectedOption) =>
    updateLead(leadId, { stage_id: selectedOption.value }, config)
  );

  const handleSelectedStage = (selectedOption) => {
    mutateLead(selectedOption);
  };

  // Selector: Agent
  const chatId = attributes?.id;
  const accountToDefaultOption = {
    label: attributes?.attended_by?.first_name || "Sin asignar",
    value: attributes?.attended_by?.id,
  };

  const { data: accounts } = useQuery(
    "accounts",
    async () => getAccounts(config),
    {
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
    }
  );

  const { mutate: mutateChat } = useMutation(async (selectedOption) =>
    updateChat(chatId, { account_id: selectedOption.value }, config)
  );

  const handleSelectedAccount = (selectedOption) => {
    mutateChat(selectedOption);
  };

  const { data: notes, refetch: refetchNotes } = useQuery(
    ["notes", chatId],
    async () => getNotes(chatId, config),
    {
      enabled: false,
      retry: 3,
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
    }
  );

  // Function: Add emoji to message box
  const appendEmoji = (event) => {
    let sym = event.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInputMessage(inputMessage + emoji);
  };

  // Function: Push message with enter key
  function handleKeyDown(event) {
    if (event.key === "Enter" && inputMessage) {
      pushMessage();
    }
  }

  const { data: templates, refetch: refetchTemplates } = useQuery(
    "templates",
    async () => getTemplates(config),
    {
      enabled: false,
      retry: 3,
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
    }
  );

  // Load templates
  function handleTemplateClick() {
    refetchTemplates();
    setIsOpen(true);
  }

  // Image upload
  function handleInputUpload(event) {
    let fileName = event?.target?.files[0];
    const data = new FormData();
    data.append("file", fileName);
    postMedia(chatId, data, config);
  }

  // Document upload
  function handleDocumentUpload(event) {
    let file = event?.target?.files[0];
    const data = new FormData();
    data.append("file", file);
    postDocument(chatId, data, config);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      width: "50rem",
      height: "30rem",
      overflow: "hidden",
      border: "none",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
  };

  return (
    <div className="chat__window">
      {/* Chat window header with options */}
      <section className="chat__window-header">
        <div className="chat__window-summary">
          <ClientAvatar firstName={attributes?.lead?.name} />
          <div className="chat__window-about">
            <h2>{attributes?.lead?.name}</h2>
            <h3>{attributes?.lead?.phone}</h3>
          </div>
        </div>
        <div className="chat__window-options">
          <div className="select">
            <p>Asesor</p>
            <Select
              styles={tramySelectStyles}
              options={accountToOptions(accounts)}
              onChange={handleSelectedAccount}
              defaultValue={accountToDefaultOption}
              value={accountToDefaultOption}
            />
          </div>
          <div className="select">
            <p>Etapa</p>
            <Select
              styles={tramySelectStyles}
              options={pipelinesToOptions(pipelines)}
              onChange={handleSelectedStage}
              defaultValue={stageToDefaultOption}
              value={stageToDefaultOption}
            />
          </div>

          {/* Notes */}
          <button onClick={handleNoteList}>
            <NoteIcon />
          </button>
          <Modal
            onRequestClose={handleNoteModal}
            isOpen={noteIsOpen}
            style={customStyles}
            ariaHideApp={false}
          >
            <div className="template__modal-header">
              <h1>Mis notas</h1>
              <button
                className="template__close-button"
                onClick={handleNoteModal}
              >
                X
              </button>
            </div>
            <NotePanel chatId={chatId} data={notes} />
          </Modal>
        </div>
      </section>

      {/* Chat window messages */}
      <section className="chat__window-messages">
        {attributes?.chat_data?.messages.map((message) => (
          <ChatMessage key={message.id} messageData={message} />
        ))}
        <div
          style={{
            float: "right",
            clear: "both",
          }}
          ref={hookDiv}
        ></div>
      </section>

      <Modal
        onRequestClose={handleCloseModal}
        isOpen={isOpen}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="template__modal-header">
          <h1>Mis plantillas</h1>
          <button className="template__close-button" onClick={handleCloseModal}>
            X
          </button>
        </div>
        <TemplatePanel chatId={chatId} data={templates} setIsOpen={setIsOpen} />
      </Modal>

      {/* Chat Input Box */}
      <section className="chat__window-textbox">
        {/* Emojies */}
        <button onClick={() => setShowEmojis(!showEmojis)}>
          <SmileIcon />
        </button>
        {showEmojis && (
          <div>
            <Picker
              title="tramy-emojis"
              emoji="heart_eyes"
              onSelect={appendEmoji}
              style={{
                position: "absolute",
                bottom: "8.25rem",
                paddingTop: "10px",
              }}
              i18n={{
                search: "Buscar tramy-emoji",
                categories: {
                  search: "Resultados de búsqueda",
                  recent: "Recientes",
                },
              }}
            />
          </div>
        )}

        {/* Document */}
        <input
          id="upload-document"
          type="file"
          accept="application/pdf"
          onChange={handleDocumentUpload}
          style={{ display: "none" }}
          multiple={false}
        />
        <label htmlFor="upload-document">
          <ClipIcon />
        </label>

        {/* Image */}
        <input
          id="upload-file"
          type="file"
          accept="image/*"
          onChange={handleInputUpload}
          style={{ display: "none" }}
          multiple={false}
        />
        <label htmlFor="upload-file">
          <ImageIcon />
        </label>

        <div className="message-write">
          <button onClick={handleTemplateClick}>
            <TemplateIcon />
          </button>

          <input
            type="text"
            placeholder="Escribir mensaje..."
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
            onKeyDown={handleKeyDown}
          ></input>
          <button type="submit" onClick={pushMessage}>
            <SendIcon />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ChatWindow;

// Pending imports
// import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";

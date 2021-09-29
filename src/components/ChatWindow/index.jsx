import { useRef, useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import useToken from "../../hooks/useToken";
import { pipelinesToOptions } from "../../helpers/formatters/select";
import { getPipelines } from "../../services/api/pipeline";
import { updateLead } from "../../services/api/lead";
import ChatMessage from "../UI/ChatMessage";
import ClientAvatar from "../ClientAvatar";
import Select from "react-select";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { ReactComponent as EmojiIcon } from "../../assets/icons/emoji.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";

import "./styles.css";

function ChatWindow({
  currentChat,
  inputMessage,
  setInputMessage,
  pushMessage,
}) {
  // Wrap chat attributes
  const attributes = currentChat?.attributes;

  // Config
  const { token } = useToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  // Emoji
  const [showEmojis, setShowEmojis] = useState(false);

  // Ref to chat window bottom
  const hookDiv = useRef(null);

  // Scroll down all messages by default
  useEffect(() => {
    hookDiv.current.scrollIntoView();
  });

  // Selector: Lead
  const leadId = attributes?.lead?.id;
  const stageToDefaultOption = {
    label: attributes?.current_stage?.name || "Sin etapa",
    value: attributes?.current_stage?.id,
  };

  const { data: pipelines } = useQuery("pipelines", async () =>
    getPipelines(config)
  );

  const formattedOpts = pipelinesToOptions(pipelines);

  const handleSelectedStage = (selectedOption) => {
    mutate(selectedOption);
  };

  const { mutate } = useMutation(async (selectedOption) =>
    updateLead(leadId, { stage_id: selectedOption.value }, config)
  );

  // Selector: Agent

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
          <Select
            color={"#969696"}
            borderColor={"#dfdfdf"}
            backgroundColor={"white"}
            placeholder={"Diego Montes"}
          />
          <Select
            options={formattedOpts}
            onChange={handleSelectedStage}
            defaultValue={stageToDefaultOption}
          />
        </div>
      </section>

      {/* Chat window messages */}
      <section className="chat__window-messages">
        {attributes?.chat_data?.messages.map((message) => (
          <ChatMessage key={message.id} messageData={message} />
        ))}
        <div style={{ float: "right", clear: "both" }} ref={hookDiv}></div>
      </section>

      {/* Chat Input Box */}
      <section className="chat__window-textbox">
        <button onClick={() => setShowEmojis(!showEmojis)}>
          <EmojiIcon />
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
        <div className="message-write">
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

// import { ReactComponent as TemplateIcon } from "../../assets/icons/template.svg";
// import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
// import { ReactComponent as AgentIcon } from "../../assets/icons/agent.svg";
// import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg";
// import Button from "../UI/Button";

// Button for templates:
//<button>
//  <TemplateIcon />
//</button>;

// Button for notes:
// <Button
//   icon={<NoteIcon />}
//   iconColor={"#969696"}
//   content={"Notas"}
//   backgroundColor={"white"}
//   contentColor={"#969696"}
//   borderColor={"1px solid #dfdfdf"}
// />

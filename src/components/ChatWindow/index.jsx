import { useRef, useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import useConfig from "../../hooks/useConfig";
import {
  pipelinesToOptions,
  accountToOptions,
} from "../../helpers/formatters/select";
import { getPipelines } from "../../services/api/pipeline";
import { getAccounts } from "../../services/api/account";
import { updateChat } from "../../services/api/chat";
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
  // Select
  const customStyles = {
    container: (provided) => ({
      ...provided,
      padding: "0.7rem",
      fontSize: "0.8rem",
      color: "#5a5a5a",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "#5a5a5a",
      width: "6rem",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),

    control: (provided) => ({
      ...provided,
      fontSize: "0.8rem",
      color: "#5a5a5a",
      cursor: "pointer",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      borderColor: "#dfdfdf",
      "&:hover": {
        borderColor: "#dfdfdf",
      },
    }),
  };
  // Wrap chat attributes
  const attributes = currentChat?.attributes;

  // Config
  const { config } = useConfig();

  // Emoji
  const [showEmojis, setShowEmojis] = useState(false);

  // Ref to chat window bottom
  const hookDiv = useRef(null);

  // Scroll down all messages by default
  useEffect(() => {
    hookDiv.current.scrollIntoView();
  }, [currentChat?.attributes?.id]);

  // Selector: Lead
  const leadId = attributes?.lead?.id;
  const stageToDefaultOption = {
    label: attributes?.current_stage?.name || "Sin etapa",
    value: attributes?.current_stage?.id,
  };

  const { data: pipelines } = useQuery("pipelines", async () =>
    getPipelines(config)
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

  const { data: accounts } = useQuery("accounts", async () =>
    getAccounts(config)
  );

  const { mutate: mutateChat } = useMutation(async (selectedOption) =>
    updateChat(chatId, { account_id: selectedOption.value }, config)
  );

  const handleSelectedAccount = (selectedOption) => {
    mutateChat(selectedOption);
  };

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
            styles={customStyles}
            options={accountToOptions(accounts)}
            onChange={handleSelectedAccount}
            defaultValue={accountToDefaultOption}
            value={accountToDefaultOption}
          />
          <Select
            styles={customStyles}
            options={pipelinesToOptions(pipelines)}
            onChange={handleSelectedStage}
            defaultValue={stageToDefaultOption}
            value={stageToDefaultOption}
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

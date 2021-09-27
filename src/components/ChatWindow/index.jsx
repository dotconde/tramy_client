import { useRef, useState, useEffect } from "react";
// import { ReactComponent as TemplateIcon } from "../../assets/icons/template.svg";
// import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
// import { ReactComponent as AgentIcon } from "../../assets/icons/agent.svg";
import { ReactComponent as EmojiIcon } from "../../assets/icons/emoji.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";
import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg";
import ChatMessage from "../UI/ChatMessage";
import ClientAvatar from "../ClientAvatar";
import { useQuery } from "react-query";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import Button from "../UI/Button";
import Select from "react-select";
import useToken from "../../hooks/useToken";
import * as api from "../../services/api/pipeline";
import "./styles.css";

function ChatWindow({
  currentChat,
  inputMessage,
  setInputMessage,
  pushMessage,
}) {
  const { token } = useToken();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  // States
  const [showEmojis, setShowEmojis] = useState(false);

  // Ref to chat window bottom
  const hookDiv = useRef(null);

  useEffect(() => {
    hookDiv.current.scrollIntoView();
  });

  // Wrap chat attributes
  const attributes = currentChat?.attributes;

  // When user press enter and inputMessage has a value, then push message
  function handleKeyDown(event) {
    if (event.key === "Enter" && inputMessage) {
      pushMessage();
    }
  }

  const appendEmoji = (event) => {
    let sym = event.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInputMessage(inputMessage + emoji);
  };

  // WIP for React Select
  const { data: pipelines } = useQuery("pipelines", async () =>
    api.getPipelines(config)
  );
  console.log(pipelines);

  const options = [
    {
      label: "Group 1",
      options: [
        { label: "Group 1, option 1", value: "value_1" },
        { label: "Group 1, option 2", value: "value_2" },
      ],
    },
    {
      label: "Group 2",
      options: [
        { label: "Group 2, option 1", value: "value_3" },
        { label: "Group 2, option 2", value: "value_4" },
      ],
    },
  ];

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
          <Select options={options} />
          {/* <Select
            icon={<AgentIcon />}
            color={"#969696"}
            borderColor={"#dfdfdf"}
            backgroundColor={"white"}
            placeholder={"Diego Montes"}
          /> */}
          {/* <Select
            icon={<FilterIcon />}
            color={"#969696"}
            borderColor={"#dfdfdf"}
            backgroundColor={"white"}
            placeholder={"Nuevo Lead"}
          /> */}

          <Button
            icon={<NoteIcon />}
            iconColor={"#969696"}
            content={"Notas"}
            backgroundColor={"white"}
            contentColor={"#969696"}
            borderColor={"1px solid #dfdfdf"}
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
          {/* TODO: Connect with template Tramy API */}
          {/* <button>
            <TemplateIcon />
          </button> */}
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

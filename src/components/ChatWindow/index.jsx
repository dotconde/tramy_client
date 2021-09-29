import { useRef, useState, useEffect } from "react";
// import { ReactComponent as TemplateIcon } from "../../assets/icons/template.svg";
// import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
// import { ReactComponent as AgentIcon } from "../../assets/icons/agent.svg";
import { ReactComponent as EmojiIcon } from "../../assets/icons/emoji.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";
import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg";
import ChatMessage from "../UI/ChatMessage";
import ClientAvatar from "../ClientAvatar";
import { useQuery, useMutation } from "react-query";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import Button from "../UI/Button";
import Select from "react-select";
import useToken from "../../hooks/useToken";
import { pipelinesToOptions } from "../../helpers/formatters/select";
import { getPipelines } from "../../services/api/pipeline";
import { updateLead } from "../../services/api/lead";

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
  const leadId = currentChat?.attributes?.lead?.id;
  const stageToDefaultOption = {
    label: currentChat?.attributes?.current_stage?.name || "Sin etapa",
    value: currentChat?.attributes?.current_stage?.id,
  };
  console.log(stageToDefaultOption);

  // const [selectedStage, setSelectedStage] = useState(null);
  const [defaultValue, setdefaultValue] = useState({
    label: currentChat?.attributes?.current_stage?.name || "Sin etapa",
    value: currentChat?.attributes?.current_stage?.id,
  });

  const { data: pipelines } = useQuery("pipelines", async () =>
    getPipelines(config)
  );

  const formattedOpts = pipelinesToOptions(pipelines);

  const handleSelectedStage = (selectedOption) => {
    console.log(selectedOption);
    // setSelectedStage(selectedOption);
    mutate(selectedOption);
  };

  const { mutate } = useMutation(async (selectedOption) =>
    updateLead(leadId, { stage_id: selectedOption.value }, config)
  );

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
            options={formattedOpts}
            defaultValue={defaultValue}
            onChange={handleSelectedStage}
          />
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

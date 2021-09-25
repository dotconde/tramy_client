import defaultProfile from "../../assets/img/default-profile.png";
import Select from "../UI/Select";
import Button from "../UI/Button";
import ChatMessage from "../UI/ChatMessage";
import { ReactComponent as AgentIcon } from "../../assets/icons/agent.svg";
import { ReactComponent as EmojiIcon } from "../../assets/icons/emoji.svg";
import { ReactComponent as TemplateIcon } from "../../assets/icons/template.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";
import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import "./styles.css";

function ChatWindow({ chatData }) {
  const attributes = chatData?.attributes;
  return (
    <div className="chat__window">
      <section className="chat__window-header">
        <div className="chat__window-about">
          <img src={defaultProfile} alt="" />
          <div>
            <h2>{attributes?.lead?.name}</h2>
            <h3>{attributes?.lead?.phone}</h3>
          </div>
        </div>
        <div className="chat__window-options">
          <Select
            icon={<AgentIcon />}
            color={"#969696"}
            borderColor={"#dfdfdf"}
            backgroundColor={"white"}
            placeholder={"Diego Montes"}
          />
          <Select
            icon={<FilterIcon />}
            color={"#969696"}
            borderColor={"#dfdfdf"}
            backgroundColor={"white"}
            placeholder={"Nuevo Lead"}
          />

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
      <section className="chat__window-messages">
        {attributes?.chat_data?.messages.map((message) => (
          <ChatMessage messageData={message} />
        ))}
      </section>

      {/* Chat Input Box */}
      <section className="chat__window-textbox">
        <button>
          <EmojiIcon />
        </button>
        <div className="message-write">
          <button>
            <TemplateIcon />
          </button>
          <input type="text" placeholder="Escribir mensaje..."></input>
          <button type="submit">
            <SendIcon />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ChatWindow;

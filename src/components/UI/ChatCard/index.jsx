import React from "react";
import "./styles.css";
import { truncate } from "../../../helpers/formatters/message";
import ClientAvatar from "../../ClientAvatar";

function ChatCard({
  clientFullName = "Sin nombre",
  messagePreview = "",
  agentFullName = "Sin asignar",
  stageName = "Sin etapa",
  stageColor = "#8a8a8a",
  time,
  chatId,
  setChatId,
  // notificationCount = 0,
}) {
  const handleChatId = () => {
    setChatId(chatId);
  };
  return (
    <div className="chat-card" onClick={handleChatId}>
      <ClientAvatar firstName={clientFullName} />
      <section className="chat-card__info">
        <h2>{clientFullName}</h2>
        <h3>{truncate(messagePreview, 30)}</h3>
        <ul className="tags">
          <li className="tag">
            Asesor: <b>{agentFullName}</b>
          </li>
          <li
            className="tag"
            style={{ borderColor: stageColor, color: stageColor }}
          >
            {stageName}
          </li>
        </ul>
      </section>
      <section>
        <span className="chat-card__time">{time}</span>
        {/* <div className="chat-card__notification">
         {notificationCount}</div> */}
      </section>
    </div>
  );
}

export default ChatCard;

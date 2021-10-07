import React from "react";
import "./styles.css";
// import { truncate } from "../../../helpers/formatters/message";
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
  notificationCount = 0,
}) {
  const handleChatId = () => {
    setChatId(chatId);
  };
  return (
    <div className="chat-card" onClick={handleChatId}>
      <ClientAvatar firstName={clientFullName} />
      <section className="chat-card__info">
        <h2>{clientFullName}</h2>
        <h3>{messagePreview}</h3>
        <ul className="tags">
          <li className="tag agent">
            Asesor: <b>{agentFullName}</b>
          </li>
          <li
            className="tag funnel-stage"
            style={{ borderColor: stageColor, color: stageColor }}
          >
            {stageName}
          </li>
        </ul>
      </section>
      <section>
        <h3 className="chat-card__time">{time}</h3>
        {notificationCount > 0 && (
          <div className="chat-card__notification">{notificationCount}</div>
        )}
      </section>
    </div>
  );
}

export default ChatCard;

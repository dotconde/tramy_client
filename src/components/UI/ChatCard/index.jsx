import React from "react";
import "./styles.css";
import defaultProfile from "../../../assets/img/default-profile.png";

function ChatCard({
  clientPhoto = defaultProfile,
  clientFullName = "Sin nombre",
  messagePreview = "",
  agentFullName = "Sin asignar",
  stageName = "Sin etapa",
  stageColor = "#8a8a8a",
  time,
  // notificationCount = 0,
}) {
  return (
    <div className="chat-card">
      <img src={clientPhoto} alt="" />
      <section className="chat-card__info">
        <h2>{clientFullName}</h2>
        <h3>{messagePreview}</h3>
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

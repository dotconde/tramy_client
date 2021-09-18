import React from "react";
import "./styles.css";
import defaultProfile from "../../../assets/img/default-profile.png";

function ChatCard({
  photoUrl = defaultProfile,
  fullname,
  messagePreview,
  agent,
  stageName,
  stageColor,
  time,
}) {
  return (
    <div className="chat-card">
      <img src={photoUrl} alt="" />
      <section className="chat-card__info">
        <h2>{fullname}</h2>
        <h3>{messagePreview}</h3>
        <ul className="tags">
          <li className="tag">
            Asesor: <b>{agent}</b>
          </li>
          <li
            className="tag"
            style={{ borderColor: stageColor, color: stageColor }}
          >
            {stageName}
          </li>
        </ul>
      </section>
      <section className="chat-card__time">{time}</section>
    </div>
  );
}

export default ChatCard;

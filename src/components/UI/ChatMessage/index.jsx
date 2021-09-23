import React from "react";
import "./styles.css";
import { ReactComponent as SentIcon } from "../../../assets/icons/sent.svg";
import { ReactComponent as DeliveredIcon } from "../../../assets/icons/double-check.svg";
import { ReactComponent as ReadIcon } from "../../../assets/icons/double-check.svg";
import { ReactComponent as FailedIcon } from "../../../assets/icons/exclamation.svg";
import { ReactComponent as DeletedIcon } from "../../../assets/icons/stop.svg";

function ChatMessage({
  alignMessage,
  backgroundMessage,
  content,
  time,
  statusMessage,
}) {
  let displayStatus;

  switch (statusMessage) {
    case "sent":
      displayStatus = (
        <span className="status-message sent">
          <SentIcon />
        </span>
      );
      break;
    case "delivered":
      displayStatus = (
        <span className="status-message delivered">
          <DeliveredIcon />
        </span>
      );
      break;
    case "read":
      displayStatus = (
        <span className="status-message read">
          <ReadIcon />
        </span>
      );
      break;
    case "failed":
      displayStatus = (
        <span className="status-message failed">
          <FailedIcon />
        </span>
      );
      break;
    case "deleted":
      displayStatus = (
        <span className="status-message deleted">
          <DeletedIcon /> Se eliminó este mensaje
        </span>
      );
      break;
    // no default
  }
  return (
    <div
      className="chat-message"
      style={{
        alignItems: alignMessage,
      }}
    >
      <div
        className="chat-message__box"
        style={{
          backgroundColor: backgroundMessage,
        }}
      >
        <p>{content}</p>
        <div className="chat-message__data">
          <span>{time}</span>
          {displayStatus}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;

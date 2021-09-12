import React from "react";
import "./styles.css";

function Button({
  icon,
  content,
  backgroundColor,
  contentColor,
  borderColor,
  iconColor,
}) {
  return (
    <button
      className="trammy-button"
      style={{
        backgroundColor: backgroundColor,
        color: contentColor,
        border: borderColor,
      }}
    >
      <span
        style={{
          fill: iconColor,
        }}
      >
        {icon}
      </span>
      <p>{content}</p>
    </button>
  );
}

export default Button;

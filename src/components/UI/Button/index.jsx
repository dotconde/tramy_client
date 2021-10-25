import React from "react";
import "./styles.css";

function Button({
  disabled = false,
  icon,
  content,
  backgroundColor,
  contentColor = "white",
  borderColor = "transparent",
  borderRadius,
  margin,
  iconColor,
}) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className="tramy-button"
      style={{
        backgroundColor: backgroundColor,
        color: contentColor,
        borderColor: borderColor,
        borderRadius: borderRadius,
        margin: margin,
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

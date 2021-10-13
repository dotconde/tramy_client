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
  iconColor,
}) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className="trammy-button"
      style={{
        backgroundColor: backgroundColor,
        color: contentColor,
        borderColor: borderColor,
        borderRadius: borderRadius,
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

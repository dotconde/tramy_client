import React from "react";
import "./styles.css";

function Button({ icon, content, backgroundColor, textColor, borderColor }) {
  return (
    <div className="add-user">
      <button
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          borderColor: borderColor,
        }}
      >
        <span>{icon}</span>
        <p>{content}</p>
      </button>
    </div>
  );
}

export default Button;

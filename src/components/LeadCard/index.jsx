import React from "react";
import "./styles.css";
import defaultProfile from "../../assets/img/default-profile.png";

function LeadCard({ photoUrl = defaultProfile, fullName, agent }) {
  return (
    <div className="lead-card">
      <img src={photoUrl} alt="" />
      <div className="lead-card__info">
        <h1>{fullName}</h1>
        <p>
          Asignado a <b>{agent}</b>
        </p>
      </div>
    </div>
  );
}

export default LeadCard;

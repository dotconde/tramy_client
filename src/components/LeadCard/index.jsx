import React from "react";
import "./styles.css";
import photoProfile from "../../assets/img/profile.png";

function LeadCard({ photoUrl = photoProfile, fullName, agent }) {
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

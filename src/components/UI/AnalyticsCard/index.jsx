import React from "react";
import { ReactComponent as HelpIcon } from "../../../assets/icons/question-circle.svg";
import "./styles.css";

function AnalyticsCard({ title, data, tooltip }) {
  return (
    <div className="analytics-card">
      <div className="analytics-card__title">
        <h1>{title}</h1>
        <div className="analytics-card__tooltip">
          <HelpIcon />
          <span className="analytics-card__tooltiptext">{tooltip}</span>
        </div>
      </div>
      <h2>{data}</h2>
    </div>
  );
}

export default AnalyticsCard;

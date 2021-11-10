import React from "react";
import "./styles.css";

function AnalyticsCard({ title, data }) {
  return (
    <div className="analytics-card">
      <h2>{title}</h2>
      <span>
        <h1>{data}</h1>
      </span>
    </div>
  );
}

export default AnalyticsCard;

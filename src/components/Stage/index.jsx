import React from "react";
import "./styles.css";
import { ReactComponent as RightArrowIcon } from "../../assets/icons/right-arrow.svg";
import LeadCard from "../LeadCard";

function Stage({ width, stageData }) {
  return (
    <div
      className="stage"
      style={{
        width: `${width}%`,
      }}
    >
      {/* Header Section */}
      <section
        className="stage__header"
        style={{
          backgroundColor: stageData.color,
        }}
      >
        <div className="header__content">
          <p>{stageData.title}</p>
          <div
            className="notification__box"
            style={{
              color: stageData.color,
            }}
          >
            {stageData.notificationCount}
          </div>
        </div>
        <div className="header__triangle">
          <RightArrowIcon
            style={{
              fill: stageData.color,
            }}
          />
        </div>
      </section>

      {/* Body Section */}
      <section className="stage__body">
        {stageData.leads.map((lead) => (
          <LeadCard fullName={lead.fullName} agent={lead.agent} />
        ))}
      </section>
    </div>
  );
}

export default Stage;

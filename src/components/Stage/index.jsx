import React from "react";
import "./styles.css";
import { ReactComponent as RightArrowIcon } from "../../assets/icons/right-arrow.svg";
import LeadCard from "../LeadCard";

function Stage({ color, title, notificationCount, leads }) {
  return (
    <div className="stage">
      {/* Header Section */}
      <section
        className="stage__header"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="header__content">
          <p>{title}</p>
          <div
            className="notification__box"
            style={{
              color: color,
            }}
          >
            {notificationCount}
          </div>
        </div>
        <div className="header__triangle">
          <RightArrowIcon
            style={{
              fill: color,
            }}
          />
        </div>
      </section>

      {/* Body Section */}
      <section className="stage__body">
        {leads.map((lead) => (
          <LeadCard fullName={lead.fullName} agent={lead.agent} />
        ))}
      </section>
    </div>
  );
}

export default Stage;

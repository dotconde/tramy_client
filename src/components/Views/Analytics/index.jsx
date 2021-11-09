import React from "react";
import "./styles.css";
import { analyticsTooltip } from "../../../constants/tooltips";
import { ReactComponent as HelpIcon } from "../../../assets/icons/question-circle.svg";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";
import { ReactComponent as BookIcon } from "../../../assets/icons/book-open.svg";
import Select from "../../UI/Select";
import AnalyticsCard from "../../UI/AnalyticsCard";
import { analyticsArray, analyticsHeaders } from "../../../constants/contents";

function Analytics() {
  return (
    <div className="analytics">
      <div className="analytics__title">
        <h1>Analíticas</h1>
        <div className="analytics__tooltip">
          <HelpIcon />
          <span className="analytics__tooltiptext">{analyticsTooltip}</span>
        </div>
      </div>
      <hr />

      {/* Analytics options */}
      <div className="analytics__options">
        <Select
          backgroundColor={"#EAEAEA"}
          color={"#5a5a5a"}
          icon={<CalendarIcon />}
          placeholder={"Últimos 7 días"}
        />
        <a href="/" target={"_blank"} rel="noreferrer">
          <BookIcon /> Guía de uso
        </a>
      </div>

      {/* New contacts and conversations */}
      <div className="analytics__data">
        <h1>Nuevos contactos y conversaciones</h1>
        <div className="analytics__cards">
          {analyticsArray.map((analyticsItem) => (
            <AnalyticsCard
              title={analyticsItem.title}
              data={analyticsItem.data}
              details={analyticsItem.details}
            />
          ))}
        </div>
      </div>

      {/* Team Performance */}
      {/* <div className="analytics__data">
        <h1>Rendimiento del equipo</h1>
        <div className="analytics__wrapper">
          <table className="analytics__table">
            <tr>
              {analyticsHeaders.map((analyticsHeader) => (
                <th>{analyticsHeader}</th>
              ))}
            </tr>
            <tr>
              <td></td>
            </tr>
          </table>
        </div>
      </div> */}
    </div>
  );
}

export default Analytics;

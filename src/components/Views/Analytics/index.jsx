import React from "react";
import "./styles.css";
import { analyticsTooltip } from "../../../constants/tooltips";
import { ReactComponent as HelpIcon } from "../../../assets/icons/question-circle.svg";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";
import { useQuery } from "react-query";
import Select from "../../UI/Select";
import useConfig from "../../../hooks/useConfig";
import AnalyticsCard from "../../UI/AnalyticsCard";
import { getAnalytics } from "../../../services/api/analytics";

function Analytics() {
  const { config } = useConfig();

  const { data: analytics } = useQuery(
    "analytics",
    async () => getAnalytics(config),
    {
      retry: 3,
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
    }
  );

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
      </div>

      {/* New contacts and conversations */}
      <div className="analytics__data">
        <h1>Nuevos contactos y conversaciones</h1>
        <div className="analytics__cards">
          <AnalyticsCard
            title={"Tiempo de primera respuesta (Media)"}
            data={analytics?.average_time_first_reply || "Por calcular"}
          />
          <AnalyticsCard
            title={"Leads nuevos"}
            data={analytics?.leads_this_week}
          />
          <AnalyticsCard
            title={"Leads históricos en Tramy"}
            data={analytics?.leads_in_tramy}
          />
          <AnalyticsCard title={"Agente destacado"} data={"Próximamente"} />
          <AnalyticsCard title={"Tu mejor día fue"} data={"Próximamente"} />
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

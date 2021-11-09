import React from "react";
import "./styles.css";
import Pipeline from "../../Pipeline";
import { funnelTooltip } from "../../../constants/tooltips";
import { ReactComponent as HelpIcon } from "../../../assets/icons/question-circle.svg";

function Funnel() {
  return (
    <div className="funnel">
      <div className="funnel__title">
        <h1>Embudo de ventas</h1>
        <div className="funnel__tooltip">
          <HelpIcon />
          <span className="funnel__tooltiptext">{funnelTooltip}</span>
        </div>
      </div>
      <hr />
      <Pipeline />
    </div>
  );
}

export default Funnel;

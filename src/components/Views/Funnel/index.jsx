import React from "react";
import "./styles.css";
import Select from "../../UI/Select";
import Pipeline from "../../Pipeline";
import { ReactComponent as FilterIcon } from "../../../assets/icons/filter.svg";
import { ReactComponent as AgentIcon } from "../../../assets/icons/agent.svg";

function Funnel() {
  return (
    <div className="funnel">
      <div className="pipeline__selectors">
        <Select icon={<FilterIcon />} placeholder={"Seleccionar embudo"} />
        <Select icon={<AgentIcon />} placeholder={"Seleccione agente"} />
      </div>
      <Pipeline />
    </div>
  );
}

export default Funnel;

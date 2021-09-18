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
        <Select
          icon={<FilterIcon />}
          color={"#4c4c4c"}
          backgroundColor={"#d6d6d6"}
          placeholder={"Seleccionar embudo"}
        />
        <Select
          icon={<AgentIcon />}
          color={"#4c4c4c"}
          backgroundColor={"#d6d6d6"}
          placeholder={"Seleccione agente"}
        />
      </div>
      <Pipeline />
    </div>
  );
}

export default Funnel;

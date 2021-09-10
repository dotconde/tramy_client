import React from "react";
import "./styles.css";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";
// import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as OpenMessageIcon } from "../../assets/icons/open-message.svg";

function PipelineSelector({ agentList }) {
  return (
    <div className="pipeline-selector">
      {/* Pipeline Selector */}
      <div className="custom-select">
        <FilterIcon />
        <select>
          <optgroup label="Seleccione embudo">
            <option value="">Embudo de ventas #1</option>
            <option value="">Embudo de ventas #2</option>
          </optgroup>
          <optgroup label="Nuevo">
            <option value="">Agregar embudo</option>
          </optgroup>
        </select>
      </div>

      {/* Agent Selector */}
      <div className="custom-select">
        <OpenMessageIcon />
        <select>
          <optgroup label="Seleccione asesor">
            {agentList.map((agent) => (
              <option value="">{agent.name}</option>
            ))}
          </optgroup>
        </select>
      </div>
      {/* <MoreIcon /> */}
    </div>
  );
}

export default PipelineSelector;

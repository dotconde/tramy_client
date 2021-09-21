import React from "react";
import "./styles.css";

function ClientFilter({ placeholder, agentList, stageList }) {
  return (
    <div className="filter">
      <label htmlFor="filter">Filtro:</label>
      <select name="browser">
        <optgroup>
          <option value="" selected>
            {placeholder}
          </option>
        </optgroup>

        <optgroup label="Asesor">
          {agentList.map((agent) => (
            <option value="">{agent.name}</option>
          ))}
        </optgroup>

        <optgroup label="Estado">
          {stageList.map((stage) => (
            <option value="">{stage.title}</option>
          ))}
        </optgroup>
      </select>
    </div>
  );
}

export default ClientFilter;

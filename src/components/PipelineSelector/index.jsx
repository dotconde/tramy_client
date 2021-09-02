import React from "react";
import "./styles.css";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as OpenMessageIcon } from "../../assets/icons/open-message.svg";

function PipelineSelector() {
  return (
    <div className="pipeline-selector">
      <div className="custom-select">
        <FilterIcon />
        <select>
          <option value="">Embudo de ventas #1</option>
          <option value="">Nuevo Embudo</option>
        </select>
      </div>
      <div className="custom-select">
        <OpenMessageIcon />
        <select>
          <option value="">Diego Montes</option>
          <option value="">Renzo Trujillo</option>
          <option value="">Andy Yarieque</option>
        </select>
      </div>
      <MoreIcon />
    </div>
  );
}

export default PipelineSelector;

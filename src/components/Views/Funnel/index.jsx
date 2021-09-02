import React from "react";
import "./styles.css";
import PipelineSelector from "../../PipelineSelector";
import Pipeline from "../../Pipeline";

function Funnel() {
  return (
    <div className="funnel">
      <PipelineSelector />
      <Pipeline />
    </div>
  );
}

export default Funnel;

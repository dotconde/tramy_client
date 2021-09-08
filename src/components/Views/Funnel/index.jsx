import React from "react";
import "./styles.css";
import PipelineSelector from "../../PipelineSelector";
import Pipeline from "../../Pipeline";

function Funnel() {
  return (
    <div className="funnel">
      <PipelineSelector
        agentList={[
          {
            name: "Deyvi Conde",
          },
          {
            name: "Diego Montes",
          },
          {
            name: "Renzo Trujillo",
          },
        ]}
      />
      <Pipeline />
    </div>
  );
}

export default Funnel;

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
            name: "Jeff Bezos",
          },
        ]}
      />
      <Pipeline />
    </div>
  );
}

export default Funnel;

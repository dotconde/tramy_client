import React from "react";
import "./styles.css";
import PypelineSelector from "../../PylineSelector";
import Pypeline from "../../Pypeline";

function Funnel() {
  return (
    <div className="funnel">
      <PypelineSelector />
      <Pypeline />
    </div>
  );
}

export default Funnel;

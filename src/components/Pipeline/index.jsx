import React from "react";
import "./styles.css";
import Stage from "../Stage";

function Pipeline({
  pipelineData = [
    {
      color: "#ED3A4C",
      title: "1. Nuevo Lead",
      notificationCount: "10",
      leads: [{ fullName: "Pepe Aguirre", agent: "Diego Montes" }],
    },
    {
      color: "#F07539",
      title: "2. Contactado",
      notificationCount: "10",
      leads: [],
    },
    {
      color: "#F6B243",
      title: "3. Convertido",
      notificationCount: "10",
      leads: [],
    },
    {
      color: "#53BC9E",
      title: "4. Cierre",
      notificationCount: "10",
      leads: [],
    },
  ],
}) {
  let columnWidth = 100 / pipelineData.length;
  return (
    <div className="pipeline">
      {pipelineData.map((stage) => (
        <Stage width={columnWidth} stageData={stage} />
      ))}
    </div>
  );
}

export default Pipeline;

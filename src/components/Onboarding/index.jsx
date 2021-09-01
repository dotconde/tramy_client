import React from "react";
import "./styles.css";
import Usage from "../Usage";

function Onboarding() {
  return (
    <div className="onboarding">
      <div className="onboarding__intro">
        <h5>Onboarding de Tramy</h5>
        <p>Sigue estos pasos para saber cómo funciona la plataforma:</p>
      </div>
      <Usage />
    </div>
  );
}

export default Onboarding;

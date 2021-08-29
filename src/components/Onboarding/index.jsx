import React from "react";
import "./styles.css";
import OnboardingSteps from "../OnboardingSteps";

function Onboarding() {
  return (
    <div className="onboarding">
      <div className="onboarding__intro">
        <h5>Onboarding de Tramy</h5>
        <p>Sigue estos pasos para saber cómo funciona la plataforma:</p>
      </div>
      <OnboardingSteps />
    </div>
  );
}

export default Onboarding;

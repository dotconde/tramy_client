import React, { PureComponent } from 'react'
import './OnboardingInfo.css'
import OnboardingSteps from '../OnboardingSteps'

export class index extends PureComponent {
  render() {
    return (
      <div className="onboarding_info_container">
        <div className="onboarding_introduction">
          <h5>Onboarding de Tramy</h5>
          <p>Sigue estos pasos para saber cómo funciona la plataforma:</p>
        </div>
        <OnboardingSteps></OnboardingSteps>
      </div>
    )
  }
}

export default index

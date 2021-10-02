import React from "react";
import "./styles.css";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/profile.svg";
import { ReactComponent as BusinessIcon } from "../../../assets/icons/business.svg";
import { ReactComponent as TeamIcon } from "../../../assets/icons/team.svg";
import { ReactComponent as ChannelsIcon } from "../../../assets/icons/channels.svg";
// import { ReactComponent as AccountStatusIcon } from "../../../assets/icons/dollar-symbol.svg";
import ProfileDetail from "../../ProfileDetail";
import BusinessDetail from "../../BusinessDetail";
import Team from "../../Team";
import Channels from "../../Channels";

function Setup() {
  return (
    <div className="setup__tabset">
      {/* Profile Tab */}
      <input
        type="radio"
        name="setup__tabset"
        id="profile-tab"
        aria-controls="profile-tab"
        defaultChecked={true}
      />
      <label htmlFor="profile-tab">
        <ProfileIcon />
        <span>Mi perfil</span>
      </label>

      {/* Business Tab */}
      <input
        type="radio"
        name="setup__tabset"
        id="business-tab"
        aria-controls="business-tab"
      />
      <label htmlFor="business-tab">
        <BusinessIcon />
        <span>Mi organización</span>
      </label>

      {/* Team Tab */}
      <input
        type="radio"
        name="setup__tabset"
        id="team-tab"
        aria-controls="team-tab"
      />
      <label htmlFor="team-tab">
        <TeamIcon />
        <span>Mi equipo</span>
      </label>

      {/* Channels Tab */}
      <input
        type="radio"
        name="setup__tabset"
        id="channels-tab"
        aria-controls="channels-tab"
      />
      <label htmlFor="channels-tab">
        <div className="align">
          <ChannelsIcon />
          <span>Canales</span>
        </div>
      </label>

      {/* <input
        type="radio"
        name="setup__tabset"
        id="accountstatus-tab"
        aria-controls="accountstatus-tab"
      />
      <label htmlFor="accountstatus-tab">
        <AccountStatusIcon />
        <span>Estado de Cuenta</span>
      </label> */}

      {/* Contents */}
      <div className="setup__tab-panels">
        <section id="profile-tab" className="setup__tab-panel">
          <ProfileDetail />
        </section>

        <section id="business-tab" className="setup__tab-panel">
          <BusinessDetail />
        </section>

        <section id="team-tab" className="setup__tab-panel">
          <Team />
        </section>

        <section id="channels-tab" className="setup__tab-panel">
          <Channels />
        </section>

        {/* <section id="accountstatus-tab" className="setup__tab-panel">
          <span>component account status</span>
        </section> */}
      </div>
    </div>
  );
}

export default Setup;

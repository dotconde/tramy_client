import React from "react";
import "./styles.css";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/profile.svg";
import { ReactComponent as BusinessIcon } from "../../../assets/icons/business.svg";
import { ReactComponent as TeamIcon } from "../../../assets/icons/team.svg";
import { ReactComponent as ChannelsIcon } from "../../../assets/icons/channels.svg";
// import { ReactComponent as AccountStatusIcon } from "../../../assets/icons/dollar-symbol.svg";
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
      <label for="profile-tab">
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
      <label for="business-tab">
        <BusinessIcon />
        <span>Mi negocio</span>
      </label>

      {/* Team Tab */}
      <input
        type="radio"
        name="setup__tabset"
        id="team-tab"
        aria-controls="team-tab"
      />
      <label for="team-tab">
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
      <label for="channels-tab">
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
      <label for="accountstatus-tab">
        <AccountStatusIcon />
        <span>Estado de Cuenta</span>
      </label> */}

      {/* Contents */}
      <div class="setup__tab-panels">
        <section id="profile-tab" className="setup__tab-panel">
          <span>component profile</span>
        </section>

        <section id="business-tab" className="setup__tab-panel">
          <span>component business</span>
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

import React from "react";
import "./styles.css";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/profile.svg";
import { ReactComponent as BusinessIcon } from "../../../assets/icons/business.svg";
import { ReactComponent as TeamIcon } from "../../../assets/icons/team.svg";
import { ReactComponent as ChannelsIcon } from "../../../assets/icons/channels.svg";
import { ReactComponent as AccountStatusIcon } from "../../../assets/icons/dollar-symbol.svg";

function Setup() {
  return (
    <div className="tabset">
      {/* Profile Tab */}
      <input
        type="radio"
        name="tabset"
        id="tab1"
        aria-controls="profile-tab"
        defaultChecked={true}
      />
      <label for="tab1">
        <ProfileIcon />
        <span>Mi perfil</span>
      </label>

      {/* Business Tab */}
      <input
        type="radio"
        name="tabset"
        id="tab2"
        aria-controls="business-tab"
      />
      <label for="tab2">
        <BusinessIcon />
        <span>Mi negocio</span>
      </label>

      {/* Team Tab */}
      <input type="radio" name="tabset" id="tab3" aria-controls="team-tab" />
      <label for="tab3">
        <TeamIcon />
        <span>Mi equipo</span>
      </label>

      {/* Channels Tab */}
      <input
        type="radio"
        name="tabset"
        id="tab4"
        aria-controls="channels-tab"
      />
      <label for="tab4">
        <div className="align">
          <ChannelsIcon />
          <span>Canales</span>
        </div>
      </label>

      {/* <input
        type="radio"
        name="tabset"
        id="tab5"
        aria-controls="accountstatus-tab"
      />
      <label for="tab5">
        <AccountStatusIcon />
        <span>Estado de Cuenta</span>
      </label> */}

      {/* Contents */}
      <div class="tab-panels">
        <section id="profile-tab" className="tab-panel">
          <span>component profile</span>
        </section>

        <section id="business-tab" className="tab-panel">
          <span>component business</span>
        </section>

        <section id="team-tab" className="tab-panel">
          <span>component team</span>
        </section>

        <section id="channels-tab" className="tab-panel">
          <span>component channels</span>
        </section>

        <section id="accountstatus-tab" className="tab-panel">
          <span>component account stat</span>
        </section>
      </div>
    </div>
  );
}

export default Setup;

import React from "react";
import "./styles.css";
import AccountInfo from "../AccountInfo";
import tramyLogo from "../../assets/logo/tramy_logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as ChatIcon } from "../../assets/icons/chat.svg";
import { ReactComponent as ClientIcon } from "../../assets/icons/client.svg";
import { ReactComponent as FunnelIcon } from "../../assets/icons/funnel.svg";
import { ReactComponent as TeamIcon } from "../../assets/icons/team.svg";
import { ReactComponent as SetupIcon } from "../../assets/icons/setup.svg";

function NavBar() {
  return (
    <div className="navbar">
      <section className="navbar__logo">
        <img src={tramyLogo} alt="Tramy logo" />
      </section>
      <hr />
      <section className="navbar__menu">
        <AccountInfo />
        <ul className="navbar__list">
          <li>
            <HomeIcon />
            Inicio
          </li>
          <li>
            <ChatIcon />
            Chat
          </li>
          <li>
            <ClientIcon />
            Clientes
          </li>
          <li>
            <FunnelIcon />
            Embudo de Ventas
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <ul className="navbar__list">
          <li>
            <TeamIcon />
            Equipo
          </li>
          <li>
            <SetupIcon />
            Configuración
          </li>
        </ul>
      </section>
    </div>
  );
}

export default NavBar;

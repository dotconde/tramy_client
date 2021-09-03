import React from "react";
import "./styles.css";
import Profile from "../Profile";
import tramyLogo from "../../assets/logo/tramy_logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as ChatIcon } from "../../assets/icons/chat.svg";
import { ReactComponent as ClientIcon } from "../../assets/icons/client.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as TeamIcon } from "../../assets/icons/team.svg";
import { ReactComponent as SetupIcon } from "../../assets/icons/setup.svg";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Router>
      <div className="navbar">
        <section className="navbar__logo">
          <img src={tramyLogo} alt="Tramy logo" />
        </section>
        <hr />
        <section className="navbar__menu">
          {/* Profile quick info */}
          <Profile />

          {/* Navigation options */}
          <ul className="navbar__list">
            <li>
              <NavLink to="/">
                <HomeIcon />
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/chat">
                <ChatIcon />
                Chat
              </NavLink>
            </li>
            <li>
              <NavLink to="/clients">
                <ClientIcon />
                Clientes
              </NavLink>
            </li>
            <li>
              <NavLink to="/funnel">
                <FilterIcon />
                Embudo de Ventas
              </NavLink>
            </li>
          </ul>
        </section>
        <hr />
        <section>
          <ul className="navbar__list">
            <li>
              <NavLink to="/team">
                <TeamIcon />
                Equipo
              </NavLink>
            </li>
            <li>
              <NavLink to="/setup">
                <SetupIcon />
                Configuración
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
    </Router>
  );
}

export default Navbar;

import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import Profile from "../Profile";
import tramyLogo from "../../assets/logo/tramy_logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as ChatIcon } from "../../assets/icons/chat.svg";
import { ReactComponent as ClientIcon } from "../../assets/icons/client.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as TeamIcon } from "../../assets/icons/team.svg";
import { ReactComponent as SetupIcon } from "../../assets/icons/setup.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";
import { ReactComponent as ToggleIcon } from "../../assets/icons/toggle.svg";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear("token");
    history.push("/login");
    window.location.reload(false);
  };
  return (
    <div className="sidebar">
      <section className="sidebar__logo">
        <img src={tramyLogo} alt="Tramy logo" />
      </section>
      <hr />
      <section className="sidebar__menu">
        {/* Profile quick info */}
        <Profile />

        {/* Navigation options */}
        <ul className="sidebar__list">
          <li>
            <NavLink exact activeClassName="active" to="/">
              <HomeIcon />
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/chat">
              <ChatIcon />
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/chat" to="/clients">
              <ClientIcon />
              Clientes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/chat" to="/funnel">
              <FilterIcon />
              Embudo de Ventas
            </NavLink>
          </li>
        </ul>
      </section>
      <hr />
      <section className="sidebar__settings">
        <ul className="sidebar__list">
          {/* <li>
            <NavLink to="/team">
              <TeamIcon />
              Equipo
            </NavLink>
          </li> */}
          <li>
            <NavLink activeClassName="active" to="/setup">
              <SetupIcon />
              Configuración
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" onClick={handleLogout}>
              <LogoutIcon />
              Cerrar sesión
            </NavLink>
          </li>
        </ul>
      </section>
      {/* <section className="sidebar__collapse">
        <ToggleIcon />
      </section> */}
    </div>
  );
}

export default Sidebar;

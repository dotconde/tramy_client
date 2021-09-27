import React from "react";
import { ReactComponent as TrammyLogo } from "../../../assets/logo/black_trammy_logo.svg";
import "./styles.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="preloader"></div>
      <p>Cargando...</p>
    </div>
  );
}

export default Loader;

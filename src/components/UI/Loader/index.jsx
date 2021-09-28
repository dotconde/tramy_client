import React from "react";
import "./styles.css";

function Loader({ message = "Cargando..." }) {
  return (
    <div className="loader-container">
      <div className="preloader"></div>
      <p>{message}</p>
    </div>
  );
}

export default Loader;

import React from "react";
import "./styles.css";
import { ReactComponent as ErrorImage } from "../../../assets/img/tramy-error.svg";

function ServerError() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="server-error">
      <ErrorImage />
      <h1>Lo sentimos, hemos tenido un problema.</h1>
      <button onClick={refreshPage}>Vuelve a intentarlo</button>
      <p>Si no funciona, intente cerrar sesión y volver a iniciarla.</p>
    </div>
  );
}

export default ServerError;

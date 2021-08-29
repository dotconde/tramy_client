import React from "react";
import "./styles.css";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp.svg";
import checkIcon from "../../assets/icons/check.svg";

function Feed() {
  return (
    <div className="feed">
      <section className="feed__welcome">
        <h3>Hola, Deyvi 👋 </h3>
        <p>¡Bienvenido a Tramy!</p>
        <hr />
      </section>
      <section className="feed__channel">
        <h4>Canales Integrados</h4>
        <article className="channel">
          <div className="channel__icon">
            <WhatsappIcon />
          </div>
          <div className="channel__description">
            <h5>WhatsApp Business (Integración Oficial)</h5>
            <p>Envía y recibe mensajes de WhatsApp a través de Tramy</p>
          </div>
          <div className="channel__status">
            {/* Wrap checkIcon within img for compatibility purposes */}
            <img src={checkIcon} alt="check icon" />
            <p>Conectado</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Feed;

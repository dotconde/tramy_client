import React from "react";
import "./styles.css";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";

function Feed({ firstName = "Deyvi", channelStatus = false }) {
  return (
    <div className="feed">
      {/* Feed Welcome */}
      <section className="feed__welcome">
        <h3>Hola, {firstName} 👋 </h3>
        <p>¡Bienvenido a Tramy!</p>
        <hr />
      </section>

      {/* Feed list of integrated channels */}
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

            <p>
              {channelStatus ? (
                <div className="channel-active">
                  <CheckIcon /> Conectado
                </div>
              ) : (
                <div className="channel-inactive">
                  <CrossIcon /> No conectado
                </div>
              )}
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Feed;

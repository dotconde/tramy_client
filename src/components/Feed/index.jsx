import React from "react";
import "./styles.css";
import Channel from "../UI/Channel";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp.svg";

function Feed({ firstName = "Deyvi" }) {
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
        <Channel
          icon={<WhatsappIcon />}
          title={"WhatsApp Business (Integración Oficial)"}
          content={"Envía y recibe mensajes de WhatsApp a través de Tramy"}
          channelStatus={false}
        />
      </section>
    </div>
  );
}

export default Feed;

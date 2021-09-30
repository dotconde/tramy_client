import React from "react";
import "./styles.css";
import SetupCard from "../UI/SetupCard";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp.svg";
import ContactMessage from "../UI/ContactMessage";

function Channels() {
  return (
    <div className="channels-tab">
      <div className="channels__content">
        <section className="channels">
          <h4>Mis canales</h4>
          <SetupCard
            icon={<WhatsappIcon />}
            title={"WhatsApp Business (Integración Oficial)"}
            content={"Envía y recibe mensajes de WhatsApp a través de Tramy"}
            conectionStatus={true}
          />
        </section>
        {/* <section className="templates">
        <h4>Mis plantillas</h4>
        <SetupCard
          icon={<WhatsappIcon />}
          title={"Número de celular: "}
          businessPhone={"+51 9325478412"}
          content={"Gestiona las plantillas de mensajes de Whatsapp Business"}
        />
      </section> */}
      </div>

      <ContactMessage />
    </div>
  );
}

export default Channels;

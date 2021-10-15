import React from "react";
import "./styles.css";
import SetupCard from "../UI/SetupCard";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp-square.svg";
import { ReactComponent as MessengerIcon } from "../../assets/icons/messenger-square.svg";
import ContactDetails from "../UI/ContactDetails";

function Channels() {
  return (
    <div className="channels-tab">
      <div className="channels__content">
        <section className="channels">
          <h1>Mis canales</h1>
          <SetupCard
            icon={<WhatsappIcon />}
            title={"WhatsApp Business (Integración Oficial)"}
            content={"Envía y recibe mensajes de WhatsApp a través de Tramy"}
            status={"active"}
          />
          <h1>Próximamente</h1>
          <h2>
            <a
              href="mailto:soporte@tramy?subject=Deseo información sobre Facebook Messenger en Tramy.io "
              target={"_blank"}
              rel="noreferrer"
            >
              Regístrate
            </a>
            &nbsp;para ser el primero en enterarte sobre nuestro nuevo
            lanzamiento.
          </h2>
          <SetupCard
            icon={<MessengerIcon />}
            title={"Facebook Messenger para empresas (Integración Oficial)"}
            content={
              "Envía y recibe mensajes de  Facebook Messenger a través de Tramy"
            }
            status={"coming-soon"}
          />
        </section>
        {/* <section className="templates">
        <h1>Mis plantillas</h1>
        <SetupCard
          icon={<WhatsappIcon />}
          title={"Número de celular: "}
          businessPhone={"+51 9325478412"}
          content={"Gestiona las plantillas de mensajes de Whatsapp Business"}
        />
      </section> */}
      </div>

      <ContactDetails />
    </div>
  );
}

export default Channels;

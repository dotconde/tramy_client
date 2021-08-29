import React from "react";
import "./styles.css";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp.svg";
import checkIcon from "../../assets/icons/check.svg";

function DetailedProduct() {
  return (
    <div className="detailed_product_container">
      <section className="intro_container">
        <h3>Hola, Deyvi 👋 </h3>
        <p>¡Bienvenido a Tramy!</p>
        <hr />
      </section>
      <section className="channels_container">
        <h4>Canales Integrados</h4>
        <article className="article_container">
          <div className="social_network_icon">
            <WhatsappIcon />
          </div>
          <div className="social_network_description">
            <h5>WhatsApp Business (Integración Oficial)</h5>
            <p>Envía y recibe mensajes de WhatsApp a través de Tramy</p>
          </div>
          <div className="social_network_status">
            {/* Wrap checkIcon within img for compatibility purposes */}
            <img src={checkIcon} alt="check icon" />
            <p>Conectado</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default DetailedProduct;

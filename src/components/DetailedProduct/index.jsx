import React, { PureComponent } from 'react'
import './DetailedProduct.css';
import iconWhatsapp from '../../assets/icons/whatsapp_icon.svg'
import iconCheck from '../../assets/icons/comprobar.svg'

export class index extends PureComponent {
  render() {
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
              <img src={iconWhatsapp } alt="whatsapp icon" />
            </div>
            <div className="social_network_description">
              <h5>WhatsApp Business (Integración Oficial)</h5>
              <p>Envía y recibe mensajes de WhatsApp a través de Tramy</p>
            </div>
            <div className="social_network_status">
              <img src={iconCheck} alt="check icon" />
              <p>Conectado</p>
            </div>
          </article>
        </section>
      </div>
    )
  }
}

export default index

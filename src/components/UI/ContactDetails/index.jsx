import React from "react";
import "./styles.css";

function ContactDetails() {
  return (
    <div className="contact-details">
      Para editar tus datos, u otras consultas, &nbsp;
      <a href="mailto:soporte@tramy.io" target={"_blank"} rel="noreferrer">
        contáctanos.
      </a>
    </div>
  );
}

export default ContactDetails;

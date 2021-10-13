import React from "react";
import "./styles.css";

function Usage() {
  return (
    <div className="usage">
      <div className="usage__accordion">
        {/* First step: Clients */}
        <div className="step">
          <input type="radio" id="rd1" name="rd" />
          <label className="step__title" htmlFor="rd1">
            😊 &nbsp; Atiende tus clientes
          </label>
          <div className="step__content">
            <p>
              Para responder el mensaje de un nuevo cliente, sigue estos pasos:
            </p>
            <ol>
              <li>
                Ve al apartado de <b>Chat.</b>
              </li>
              <li>Haz click en el nombre de tu cliente.</li>
              <li>¡Listo! El mensaje llegará inmediatamente a su móvil</li>.
            </ol>
          </div>
        </div>
        {/* Second step: Client list */}
        <div className="step">
          <input type="radio" id="rd2" name="rd" />
          <label className="step__title" htmlFor="rd2">
            🚀 &nbsp; Lista de clientes
          </label>
          <div className="step__content">
            <p>
              Visualiza los clientes que interactuaron con tu organización,
              siguiendo estos pasos:
            </p>
            <ol>
              <li>
                Ve al apartado <b>Clientes</b>.
              </li>
            </ol>
          </div>
        </div>
        {/* Third step: Funnel */}
        <div className="step">
          <input type="radio" id="rd3" name="rd" />
          <label className="step__title" htmlFor="rd3">
            🕹 &nbsp; Embudo de ventas
          </label>
          <div className="step__content">
            <p>Actualiza la etapa de tus clientes deslizando entre columnas.</p>
            <ol>
              <li>
                Ve al apartado <b>Embudo</b>.
              </li>
              <li>Selecciona un cliente y deslizalo.</li>
              <li>¡Listo! La etapa fue actualizada.</li>
            </ol>
          </div>
        </div>
        {/* Fourth step: Setup */}
        <div className="step">
          <input type="radio" id="rd4" name="rd" />
          <label className="step__title" htmlFor="rd4">
            🛠 &nbsp; Configuración
          </label>
          <div className="step__content">
            <p>
              Para configurar los datos de tu organización, sigue estos pasos:
            </p>
            <ol>
              <li>
                Ve al apartado <b>Configuracion</b>.
              </li>
              <li>
                En <b>Mi perfil</b> podrás actualizar tus datos.
              </li>
              <li>
                En <b>Mi organización</b> podrás actualizar los datos de tu
                organización.
              </li>
              <li>
                En <b>Mi equipo</b> podrás los miembros en tu equipo.
              </li>
              <li>
                En <b>Canales</b> podrás ver tus canales activos.
              </li>
            </ol>
          </div>
        </div>
        {/* Fourth step: My first template */}
        {/* <div className="step">
          <input type="radio" id="rd4" name="rd" />
          <label className="step__title" htmlFor="rd4">
            📃 &nbsp; Mi primera plantilla{" "}
          </label>
          <div className="step__content">
            <p>
              Para crear y editar tu primer embudo de ventas, sigue los
              siguientes pasos:
            </p>
            <ol>
              <li>
                Ve al apartado <b>Embudo de Ventas</b>
              </li>
              <li>
                Dale click al <b>nombre del embudo.</b>
              </li>
              <li>
                Selecciona <b>Añadir nuevo Embudo.</b>
              </li>
            </ol>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Usage;

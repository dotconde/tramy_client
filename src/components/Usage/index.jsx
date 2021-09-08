import React from "react";
import "./styles.css";

function Usage() {
  return (
    <div className="usage">
      <div className="usage__accordion">
        {/* First step: Add a member */}
        <div className="step">
          <input type="radio" id="rd1" name="rd" />
          <label className="step__title" htmlFor="rd1">
            😃 &nbsp; Agrega un miembro
          </label>
          <div className="step__content">
            <p>
              Para agregar a un nuevo miembro a tu equipo, sigue los siguientes
              pasos:
            </p>
            <ol>
              <li>
                Ve al apartado de <b>Equipo.</b>{" "}
              </li>
              <li>
                Dale click a <b>Añadir usuario.</b>
              </li>
              <li>Rellena la información del nuevo usuario. </li>
            </ol>
          </div>
        </div>
        {/* Second step: Your first pipeline */}
        <div className="step">
          <input type="radio" id="rd2" name="rd" />
          <label className="step__title" htmlFor="rd2">
            🚀 &nbsp; Tu primer embudo
          </label>
          <div className="step__content">
            <p>
              Para crear y editar tu primer embudo de ventas, sigue los
              siguientes pasos:
            </p>
            <ol>
              <li>
                Ve al apartado <b>Embudo de Ventas</b>{" "}
              </li>
              <li>
                Dale click al <b>nombre del embudo.</b>
              </li>
              <li>
                Selecciona <b>Añadir nuevo Embudo.</b>
              </li>
            </ol>
          </div>
        </div>
        {/* Third step: Setup */}
        <div className="step">
          <input type="radio" id="rd3" name="rd" />
          <label className="step__title" htmlFor="rd3">
            🛠 &nbsp; Configuración
          </label>
          <div className="step__content">
            <p>
              Para crear y editar tu primer embudo de ventas, sigue los
              siguientes pasos:
            </p>
            <ol>
              <li>
                Ve al apartado <b>Embudo de Ventas</b>{" "}
              </li>
              <li>
                Dale click al <b>nombre del embudo.</b>
              </li>
              <li>
                Selecciona <b>Añadir nuevo Embudo.</b>
              </li>
            </ol>
          </div>
        </div>
        {/* Fourth step: My first template */}
        <div className="step">
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
                Ve al apartado <b>Embudo de Ventas</b>{" "}
              </li>
              <li>
                Dale click al <b>nombre del embudo.</b>
              </li>
              <li>
                Selecciona <b>Añadir nuevo Embudo.</b>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usage;

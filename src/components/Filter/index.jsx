import React from "react";
import "./styles.css";

function Filter() {
  return (
    <div className="filter">
      <label for="filter">Filtro:</label>
      <select name="browser">
        <optgroup>
          <option value="" selected>
            Sin Filtrar
          </option>
        </optgroup>

        <optgroup label="Asesor">
          <option value="">Todos</option>
          <option value="">Diego Torres</option>
          <option value="">Pedro Suarez</option>
          <option value="">Christian Meier</option>
        </optgroup>

        <optgroup label="Estado">
          <option value="">Todos</option>
          <option value="">Contactado</option>
          <option value="">Cotizado</option>
          <option value="">Pagado</option>
        </optgroup>
      </select>
    </div>
  );
}

export default Filter;

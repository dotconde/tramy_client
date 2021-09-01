import React from "react";
import "./styles.css";
import Search from "../../UI/Search";
import Button from "../../UI/Button";
import Filter from "../../Filter";
import Table from "../../UI/Table";

function Clients() {
  return (
    <div className="clients">
      <Search placeholder={"Buscar por nombre, asesor o estado"} />
      <Button content={"Añadir cliente"} />
      <Filter />
      <Table
        headers={[
          "Nombre",
          "Teléfono",
          "Email",
          "Asesor",
          "Estado",
          "Última conexión",
          "Acciones",
        ]}
      />
    </div>
  );
}

export default Clients;

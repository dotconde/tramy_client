import React from "react";
import "./styles.css";
import Search from "../../UI/Search";
import Button from "../../UI/Button";
import Filter from "../../Filter";
import Table from "../../UI/Table";
import { ReactComponent as AddUserIcon } from "../../../assets/icons/add-user.svg";

function Clients() {
  return (
    <div className="clients">
      <Search placeholder={"Buscar por nombre, asesor o estado"} />
      <Button
        icon={<AddUserIcon />}
        iconColor={"white"}
        content={"Añadir Cliente"}
        backgroundColor={"#109CF1"}
        textColor={"white"}
        borderColor={"transparent"}
      />
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

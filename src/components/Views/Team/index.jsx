import React from "react";
import "./styles.css";
import Search from "../../UI/Search";
import Button from "../../UI/Button";
import Filter from "../../Filter";
import Table from "../../UI/Table";
import { ReactComponent as AddUserIcon } from "../../../assets/icons/add-user.svg";

function Team() {
  return (
    <div className="team">
      <Search placeholder={"Buscar por nombre, cargo o permiso"} />
      <Button
        icon={<AddUserIcon />}
        iconColor={"white"}
        content={"Añadir Usuario"}
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
          "Cargo",
          "Permiso",
          "Última conexión",
          "Acciones",
        ]}
      />
    </div>
  );
}

export default Team;

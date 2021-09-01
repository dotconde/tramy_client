import React from 'react'
import "./styles.css";
import Search from "../../UI/Search";
import Button from "../../UI/Button";
import Filter from "../../Filter";
import Table from "../../Table";

function Team() {
  return (
    <div className="team">
      <Search placeholder={"Buscar por nombre, cargo o permiso"}/>
      <Button content={"Añadir Usuario"}/>
      <Filter/>
      <Table headers={["Nombre", "Teléfono", "Email", "Cargo","Permiso", "Última conexión", "Acciones" ]}/>
    </div>
  )
}

export default Team

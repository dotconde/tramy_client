import React from 'react'
import "./styles.css";
import Search from "../../UI/Search";
import Button from "../../UI/Button";
import Filter from "../../Filter";
import Table from "../../Table";

function Client() {
  return (
    <div className="client">
      <Search placeholder={"Buscar por nombre, asesor o estado"}/>
      <Button content={"Añadir cliente"}/>
      <Filter/>
      <Table headers={["Nombre", "Teléfono", "Email", "Asesor","Estado", "Última conexión", "Acciones" ]}/>
    </div>
  )
}

export default Client

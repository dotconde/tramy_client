import React from "react";
import "./styles.css";
import Search from "../../UI/Search";
import Button from "../../UI/Button";
import ClientFilter from "../../ClientFilter";
import ClientTable from "../../ClientTable";
import { ReactComponent as PencilIcon } from "../../../assets/icons/pencil.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";
import { ReactComponent as MessageIcon } from "../../../assets/icons/message.svg";
import { ReactComponent as AddUserIcon } from "../../../assets/icons/add-user.svg";

function Clients() {
  return (
    <div className="clients">
      <Search placeholder={"Buscar por nombre, asesor o estado"} />
      <div className="clients__options">
        <ClientFilter
          placeholder={"Sin Filtrar"}
          agentList={[
            { name: "Deyvi Conde" },
            { name: "Diego Montes" },
            { name: "Renzo Trujillo" },
          ]}
          stageList={[
            { title: "Nuevo lead" },
            { title: "Atención" },
            { title: "Conversión" },
            { title: "Fidelizar" },
          ]}
        />
        <Button
          icon={<AddUserIcon />}
          iconColor={"white"}
          content={"Añadir Cliente"}
          backgroundColor={"#109CF1"}
          contentColor={"white"}
          borderColor={"transparent"}
        />
      </div>
      <ClientTable
        headers={[
          "Nombre",
          "Teléfono",
          "Email",
          "Asesor",
          "Estado",
          "Fecha de creación",
          "Acciones",
        ]}
        data={[
          {
            phone: "+51943313390",
            name: "Jhon Doe",
            email: "jhon@tramy.io",
            agent: "Alberto Suarez",
            status: "Pagado",
            createdAt: "12/06/2021 , 14:10",
          },
          {
            name: "Deyvi Conde",
            phone: "+51943313391",
            email: "deyvi@tramy.io",
            agent: "Alberto Suarez",
            status: "Contactado",
            createdAt: "12/06/2021 , 14:10",
          },
        ]}
        tools={[<MessageIcon />, <PencilIcon />, <TrashIcon />]}
      />
    </div>
  );
}

export default Clients;

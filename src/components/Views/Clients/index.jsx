import React from "react";
import "./styles.css";
import Search from "../../UI/Search";
import Button from "../../UI/Button";
import ClientFilter from "../../ClientFilter";
import Table from "../../UI/Table";
import { ReactComponent as PencilIcon } from "../../../assets/icons/pencil.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";
import { ReactComponent as MessageIcon } from "../../../assets/icons/message.svg";
import { ReactComponent as AddUserIcon } from "../../../assets/icons/add-user.svg";

function Clients() {
  return (
    <div className="clients">
      <Search placeholder={"Buscar por nombre, asesor o estado"} />
      <div className="add-user">
        <Button
          icon={<AddUserIcon />}
          iconColor={"white"}
          content={"Añadir Cliente"}
          backgroundColor={"#109CF1"}
          contentColor={"white"}
          borderColor={"transparent"}
        />
      </div>
      <ClientFilter
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
        data={[
          {
            phone: "+51943313390",
            name: "Jefferson Cahuana",
            email: "d.conde.cahuana@trammy.io",
            agent: "Alberto Suarez",
            status: "Pagado",
            lastActive: "12/06/2021 , 14:10",
          },
          {
            name: "Jefferson Cahuana",
            phone: "+51943313390",
            email: "d.conde.cahuana@trammy.io",
            agent: "Alberto Suarez",
            status: "Contactado",
            lastActive: "12/06/2021 , 14:10",
          },
        ]}
        tools={[<MessageIcon />, <PencilIcon />, <TrashIcon />]}
      />
    </div>
  );
}

export default Clients;

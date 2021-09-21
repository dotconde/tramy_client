import React from "react";
import "./styles.css";
// import Button from "../UI/Button";
import Table from "../UI/Table";
// import { ReactComponent as PencilIcon } from "../../assets/icons/pencil.svg";
// import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
// import { ReactComponent as AddUserIcon } from "../../assets/icons/add-user.svg";

function Team() {
  // TODO: Add team actions (Endpoint required!)
  return (
    <div className="team">
      <div className="team__options">
        {/* <Button
          icon={<AddUserIcon />}
          iconColor={"white"}
          content={"Añadir Usuario"}
          backgroundColor={"#109CF1"}
          contentColor={"white"}
          borderColor={"transparent"}
        /> */}
      </div>
      <Table
        headers={[
          "Nombre",
          "Teléfono",
          "Email",
          "Cargo",
          "Permiso",
          "Última conexión",
          // "Acciones",
        ]}
        data={[
          {
            phone: "+51943313390",
            name: "Jefferson Cahuana",
            email: "d.conde.cahuana@trammy.io",
            role: "Asesor de ventas",
            permission: "Administrador",
            lastActive: "12/06/2021 , 14:10",
          },
          {
            name: "Jefferson Cahuana",
            phone: "+51943313390",
            email: "d.conde.cahuana@trammy.io",
            role: "Asesor de ventas",
            permission: "Administrador",
            lastActive: "12/06/2021 , 14:10",
          },
        ]}
        // tools={[<PencilIcon />, <TrashIcon />]}
      />
    </div>
  );
}

export default Team;

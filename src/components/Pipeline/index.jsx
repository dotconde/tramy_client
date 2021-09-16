import React from "react";
import "./styles.css";
import Stage from "../Stage";

function Pipeline() {
  return (
    <div className="pipeline">
      <Stage
        color={"#ED3A4C"}
        title={"1. Nuevo Prospecto"}
        notificationCount={"10"}
        leads={[
          { fullName: "Pepe Lucho", agent: "Diego Montes" },
          { fullName: "Carlos Sifuentes", agent: "Diego Montes" },
          { fullName: "Carlos Sifuentes", agent: "Diego Montes" },
          { fullName: "Carlos Sifuentes", agent: "Diego Montes" },
          { fullName: "Carlos Sifuentes", agent: "Diego Montes" },
          { fullName: "Pepe Lucho", agent: "Diego Montes" },
          { fullName: "Carlos Sifuentes", agent: "Diego Montes" },
          { fullName: "Carlos Sifuentes", agent: "Diego Montes" },
          { fullName: "Carlos Sifuentes", agent: "Diego Montes" },
          { fullName: "Carlos Sifuentes", agent: "Diego Montes" },
        ]}
      />
      <Stage
        color={"#F07539"}
        title={"2. Contactado"}
        notificationCount={"5"}
        leads={[
          { fullName: "Pepe Aguirre", agent: "Diego Montes" },
          { fullName: "Carlos Sifuentes", agent: "Diego Montes" },
        ]}
      />
      <Stage
        color={"#F6B243"}
        title={"3. Convertido"}
        notificationCount={"22"}
        leads={[
          { fullName: "Pepe Aguirre", agent: "Diego Montes" },
          { fullName: "Carlos Sifuentes", agent: "Diego Montes" },
        ]}
      />
      <Stage
        color={"#53BC9E"}
        title={"4. Cierre"}
        notificationCount={"9"}
        leads={[
          { fullName: "Pepe Aguirre", agent: "Diego Montes" },
          { fullName: "Carlos Sifuentes", agent: "Diego Montes" },
        ]}
      />
    </div>
  );
}

export default Pipeline;

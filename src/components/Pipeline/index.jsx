import React from "react";
import "./styles.css";
import Stage from "../Stage";

function Pipeline() {
  return (
    <div className="pipeline">
      <Stage
        color={"#13538A"}
        title={"1. Nuevo Lead"}
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
        color={"#2C92D5"}
        title={"2. Atención"}
        notificationCount={"5"}
        leads={[
          { fullName: "Pepe Aguirre", agent: "Diego Montes" },
          { fullName: "Carlos Sifuentes", agent: "Diego Montes" },
        ]}
      />
      <Stage
        color={"#37C9EF"}
        title={"3. Conversión"}
        notificationCount={"22"}
        leads={[
          { fullName: "Pepe Aguirre", agent: "Diego Montes" },
          { fullName: "Carlos Sifuentes", agent: "Diego Montes" },
        ]}
      />
      <Stage
        color={"#3EDAD8"}
        title={"4. Fidelizar"}
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

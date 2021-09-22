import React, { useState, useEffect } from "react";
import { BASE_URL, ENDPOINTS } from "../../config";
import useToken from "../../hooks/useToken";
import "./styles.css";
// import ClientTable from "../ClientTable";
import axios from "axios";

function Team() {
  const [team, setTeam] = useState(null);

  const endpoint = `${BASE_URL}/${ENDPOINTS.ACCOUNT}`;
  const { token } = useToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const fetchTeam = () => {
    axios.get(endpoint, config).then((response) => setTeam(response.data));
  };

  useEffect(() => {
    async function fetchData() {
      await fetchTeam();
    }
    fetchData();
  }, []);

  return (
    <div className="team">
      <div className="team__options">{/*  */}</div>
      {team ? (
        // <Table
        //   headers={["Nombre", "Teléfono", "Email", "Rol", "Estado"]}
        //   data={team}
        // />
        <p>No iTable</p>
      ) : (
        <p>Cargando ...</p>
      )}
    </div>
  );
}

export default Team;

// TODO: Add the following button to team__options
{
  /* <Button
  icon={<AddUserIcon />}
  iconColor={"white"}
  content={"Añadir Usuario"}
  backgroundColor={"#109CF1"}
  contentColor={"white"}
  borderColor={"transparent"}
/>; */
}

// TODO: Add "acciones" to table as new column
// "Acciones"

// TODO: Pass the following value to Table's prop tools
// tools={[<PencilIcon />, <TrashIcon />]}

// TODO: Add team actions (Endpoint required!)

// TODO: Add the following imports when actions are implemented
// import Button from "../UI/Button";
// import { ReactComponent as PencilIcon } from "../../assets/icons/pencil.svg";
// import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
// import { ReactComponent as AddUserIcon } from "../../assets/icons/add-user.svg";

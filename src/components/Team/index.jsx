import React, { useState, useEffect } from "react";
import { BASE_URL, ENDPOINTS } from "../../config";
import useToken from "../../hooks/useToken";
import "./styles.css";
import TeamTable from "../TeamTable";
import Loader from "../UI/Loader";
import ContactDetails from "../UI/ContactDetails";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="team-tab">
      <div className="team__content">
        <div className="team__options">{/*  */}</div>
        {team ? (
          <TeamTable
            headers={["Nombre", "Email", "Rol", "Activo", "Acciones"]}
            data={team}
          />
        ) : (
          <Loader />
        )}
      </div>
      <ContactDetails />
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

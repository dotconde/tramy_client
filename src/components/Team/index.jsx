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

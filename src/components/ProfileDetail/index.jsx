import React, { useState, useEffect, Fragment } from "react";
import { BASE_URL, ENDPOINTS } from "../../config";
import useToken from "../../hooks/useToken";
import { ProfileForm } from "./ProfileForm";
import "./styles.css";

import axios from "axios";

function ProfileDetail() {
  const endpoint = `${BASE_URL}/${ENDPOINTS.PROFILE}`;
  const { token } = useToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [data, setData] = useState(null);

  const fetchProfile = () => {
    axios.get(endpoint, config).then((response) => setData(response.data));
  };

  useEffect(() => {
    async function fetchData() {
      await fetchProfile();
    }
    fetchData();
  }, []);

  return data ? (
    <div className="profile-detail">
      <div className="profile-detail__form">
        <h1>Mi perfil</h1>
        <ProfileForm preloadedValues={data} />
      </div>
      <span className="profile-detail__contact">
        Para editar tus datos, u otras consultas, &nbsp;
        <a href="mailto:deyvi@tramy.io">contáctanos.</a>
      </span>
    </div>
  ) : (
    <div>Cargando ...</div>
  );
}

export default ProfileDetail;

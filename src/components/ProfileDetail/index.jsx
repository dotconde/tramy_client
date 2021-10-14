import React, { useState, useEffect } from "react";
import { BASE_URL, ENDPOINTS } from "../../config";
import useToken from "../../hooks/useToken";
import { ProfileForm } from "./ProfileForm";
import Loader from "../UI/Loader";
import ContactDetails from "../UI/ContactDetails";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data ? (
    <div className="profile-detail">
      <div className="profile-detail__form">
        <h1>Mi perfil</h1>
        <ProfileForm preloadedValues={data} />
      </div>
      <ContactDetails />
    </div>
  ) : (
    <Loader />
  );
}

export default ProfileDetail;

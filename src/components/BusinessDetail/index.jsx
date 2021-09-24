import React, { useState, useEffect, Fragment } from "react";
import { BASE_URL, ENDPOINTS } from "../../config";
import useToken from "../../hooks/useToken";
import { BusinessForm } from "./BusinessForm";
import "./styles.css";

import axios from "axios";

function BusinessDetail() {
  const endpoint = `${BASE_URL}/${ENDPOINTS.ORGANIZATION}`;
  const { token } = useToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [data, setData] = useState(null);

  const fetchOrganization = () => {
    axios.get(endpoint, config).then((response) => setData(response.data));
  };

  useEffect(() => {
    async function fetchData() {
      await fetchOrganization();
    }
    fetchData();
  }, []);

  return data ? (
    <div className="business-detail">
      <div className="business-detail__form">
        <h1>Mi negocio</h1>
        <BusinessForm preloadedValues={data} />
      </div>
      <span className="business-detail__contact">
        Para editar tus datos, u otras consultas, &nbsp;
        <a href="mailto:deyvi@tramy.io">contáctanos.</a>
      </span>
    </div>
  ) : (
    <div>Cargando ...</div>
  );
}

export default BusinessDetail;

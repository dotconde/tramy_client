import React, { useState, useEffect, Fragment } from "react";
import { BASE_URL, ENDPOINTS } from "../../config";
import useToken from "../../hooks/useToken";
import { BusinessForm } from "./BusinessForm";

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
    <Fragment>
      <h1>Mi organización</h1>
      <BusinessForm preloadedValues={data} />
    </Fragment>
  ) : (
    <div>Loading ...</div>
  );
}

export default BusinessDetail;

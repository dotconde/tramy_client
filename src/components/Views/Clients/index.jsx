import React, { useState, useEffect } from "react";
import { BASE_URL, ENDPOINTS } from "../../../config";
import useToken from "../../../hooks/useToken";
import { tableHeaders } from "../../../constants/client";
import Search from "../../UI/Search";
import ClientTable from "../../ClientTable";
import Loader from "../../UI/Loader";
import { ReactComponent as PencilIcon } from "../../../assets/icons/pencil.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";
import { ReactComponent as MessageIcon } from "../../../assets/icons/message.svg";
import { useDebounce } from "use-debounce";
import axios from "axios";
import "./styles.css";
// import Button from "../../UI/Button";
// import ClientFilter from "../../ClientFilter";
// import { ReactComponent as AddUserIcon } from "../../../assets/icons/add-user.svg";

function Clients() {
  const [clients, setClients] = useState(null);
  const [filter, setFilter] = useState("");
  const [debouncedFilter] = useDebounce(filter, 1000);

  const { token } = useToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const endpoint = `${BASE_URL}/${ENDPOINTS.LEAD}?query=${debouncedFilter}`;

  const fetchClients = () => {
    axios.get(endpoint, config).then((response) => setClients(response.data));
  };

  useEffect(() => {
    async function fetchData() {
      await fetchClients();
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedFilter]);

  return clients ? (
    <div className="clients">
      <Search
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder={"Buscar cliente por nombre, teléfono o email"}
        borderColor={"1px solid #dfdfdf"}
      />

      <div className="clients__options">
        {/* <ClientFilter
          placeholder={"Sin filtrar"}
          agentList={[
            { name: "Deyvi Conde" },
            { name: "Diego Montes" },
            { name: "Renzo Trujillo" },
          ]}
          stageList={[
            { title: "Nuevo lead" },
            { title: "Atención" },
            { title: "Conversión" },
            { title: "Fidelizar" },
          ]}
        /> */}
        {/* <Button
          icon={<AddUserIcon />}
          iconColor={"white"}
          content={"Añadir Cliente"}
          backgroundColor={"#109CF1"}
          contentColor={"white"}
          borderColor={"transparent"}
        /> */}
      </div>
      <ClientTable
        headers={tableHeaders}
        data={clients}
        tools={[<MessageIcon />, <PencilIcon />, <TrashIcon />]}
      />
    </div>
  ) : (
    <Loader />
  );
}

export default Clients;

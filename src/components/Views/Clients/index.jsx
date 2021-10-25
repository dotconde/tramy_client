import React, { useState } from "react";
import useConfig from "../../../hooks/useConfig";
import { tableHeaders } from "../../../constants/client";
import Search from "../../UI/Search";
import ClientTable from "../../ClientTable";
import Loader from "../../UI/Loader";
import ServerError from "../../UI/ServerError";
import { useQuery } from "react-query";
import { ReactComponent as PencilIcon } from "../../../assets/icons/pencil.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";
import { ReactComponent as MessageIcon } from "../../../assets/icons/message.svg";
import { useDebounce } from "use-debounce";
import { getLeads } from "../../../services/api/lead";
import "./styles.css";

function Clients() {
  const { config } = useConfig();

  const [filter, setFilter] = useState("");
  const [debouncedFilter] = useDebounce(filter, 1000);

  // List chats
  const {
    data: leadList,
    isLoading: isLoadingLeadList,
    isError: isErrorLeadList,
  } = useQuery(
    ["leadList", debouncedFilter],
    async () => getLeads(config, `?query=${debouncedFilter}`),
    {
      retry: 3,
    }
  );

  if (isLoadingLeadList) {
    return <Loader />;
  }

  if (isErrorLeadList) {
    return <ServerError />;
  }

  return (
    <div className="clients">
      <Search
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder={
          "Buscar cliente por nombre, teléfono, email o documento de identidad"
        }
      />

      <ClientTable
        headers={tableHeaders}
        data={leadList}
        tools={[<MessageIcon />, <PencilIcon />, <TrashIcon />]}
      />
    </div>
  );
}

export default Clients;

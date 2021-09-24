import React from "react";
import "./styles.css";
import Search from "../../UI/Search";
import ChatCard from "../../UI/ChatCard";
import ChatWindow from "../../ChatWindow";
import { useQuery } from "react-query";
import useToken from "../../../hooks/useToken";
import * as api from "../../../services/api/chat";
import { toHourMinute } from "../../../helpers/dateFormat";

function Chat() {
  const { token } = useToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const {
    data: chats,
    isLoading,
    isError,
  } = useQuery("chats", async () => api.getChats(config), { retry: 3 });

  if (isLoading) {
    return <p>Cargando ...</p>;
  }

  if (isError) {
    return <p>Ups, parece que algo salió mal ...</p>;
  }

  return (
    <div className="chat">
      {/* Start Chat List */}
      <div className="chat__list">
        <section className="chat__list-options">
          <Search
            placeholder={"Buscar por nombre, estado de embudo o agente"}
            borderColor={"1px solid #dfdfdf"}
          />
          <div className="chat__list-filter">
            <label htmlFor="chat__list-filter">Filtro:</label>
            <select name="browser">
              <option value="" selected>
                Todas las conversaciones
              </option>
              <option value="">Sin asignar</option>
              <option value="">Mis asignados</option>
            </select>
          </div>
        </section>
        <section className="chat__list-contacts">
          {chats.map((chatCard) => (
            <ChatCard
              clientFullName={chatCard?.attributes?.lead?.name}
              messagePreview={chatCard?.attributes?.last_message?.text?.body}
              agentFullName={chatCard?.attributes?.attended_by?.first_name}
              stageName={chatCard?.attributes?.current_stage?.name}
              stageColor={""}
              time={toHourMinute(chatCard?.attributes?.last_message?.timestamp)}
            />
          ))}
        </section>
      </div>
      {/* End Chat List */}

      {/* Start Chat Window */}
      <ChatWindow />
      {/* End Chat Window*/}
    </div>
  );
}

export default Chat;

import React, { useState } from "react";
import moment from "moment";
import "./styles.css";
import Search from "../../UI/Search";
import ChatCard from "../../UI/ChatCard";
import ChatWindow from "../../ChatWindow";
import { useQuery, useMutation } from "react-query";
import useToken from "../../../hooks/useToken";
import * as api from "../../../services/api/chat";

function Chat() {
  // States
  const [chatId, setChatId] = useState(null);
  const [inputMessage, setInputMessage] = useState("");

  // Config
  const { token } = useToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const data = { type: "text", message: inputMessage };

  // Pusher function
  function pushMessage() {
    mutate();
    if (isLoadingDeliveryMessage) {
      return "Enviando mensaje ...";
    }
    setInputMessage("");
  }

  const { isLoading: isLoadingDeliveryMessage, mutate } = useMutation(
    async () => api.postMessage(chatId, data, config)
  );

  // Current chat
  const {
    data: currentChat,
    // isLoading: isLoadingCurrentChat,
    // isError: isErrorCurrentChat,
  } = useQuery(["chat", chatId], async () => api.getChat(chatId, config), {
    retry: 3,
    enabled: Boolean(chatId),
    refetchInterval: 2000,
  });

  // List chats
  const {
    data: chatList,
    isLoading: isLoadingChats,
    isError: isErrorChats,
  } = useQuery("chatList", async () => api.getChats(config), {
    retry: 3,
    refetchInterval: 2000,
  });

  if (isLoadingChats) {
    return <p>Cargando ...</p>;
  }

  if (isErrorChats) {
    return <p>Ups, parece que algo salió mal ...</p>;
  }

  return (
    <div className="chat">
      {/* Chat List */}
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
          {chatList.map((chatCard) => (
            <ChatCard
              clientFullName={chatCard?.attributes?.lead?.name}
              messagePreview={chatCard?.attributes?.last_message?.text?.body}
              agentFullName={chatCard?.attributes?.attended_by?.first_name}
              stageName={chatCard?.attributes?.current_stage?.name}
              stageColor={""}
              time={moment
                .unix(chatCard?.attributes?.last_message?.timestamp)
                .format("hh:mm a")}
              chatId={chatCard?.attributes?.id}
              setChatId={setChatId}
            />
          ))}
        </section>
      </div>

      {/* Chat Window */}
      <ChatWindow
        {...{ currentChat, inputMessage, setInputMessage, pushMessage }}
      />
    </div>
  );
}

export default Chat;

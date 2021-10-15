import React, { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import Search from "../../UI/Search";
import ChatCard from "../../UI/ChatCard";
import ServerError from "../../UI/ServerError";
import Loader from "../../UI/Loader";
import ChatWindow from "../../ChatWindow";
import { ReactComponent as BlackTrammyLogo } from "../../../assets/logo/black_trammy_logo.svg";
import WelcomeWallpaper from "../../../assets/img/trammy_chat_wallpaper.svg";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useDebounce } from "use-debounce";
import useToken from "../../../hooks/useToken";
import * as api from "../../../services/api/chat";

function Chat() {
  const queryClient = useQueryClient();

  // States
  const [chatId, setChatId] = useState(null);
  const [inputMessage, setInputMessage] = useState("");
  const [filter, setFilter] = useState("");
  const [debouncedFilter] = useDebounce(filter, 1000);

  // Config
  const { token } = useToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  // Pusher function
  function pushMessage() {
    mutate({ type: "text", message: inputMessage });
    if (isLoadingDeliveryMessage) {
      return "Enviando mensaje ...";
    }
    setInputMessage("");
  }

  const { isLoading: isLoadingDeliveryMessage, mutate } = useMutation(
    async (newMessage) => api.postMessage(chatId, newMessage, config),
    {
      onMutate: async (newMessage) => {
        await queryClient.cancelQueries(["chat", chatId]);

        const previousChat = queryClient.getQueryData(["chat", chatId]);

        queryClient.setQueryData(["chat", chatId], (oldChat) => {
          let oldChatCopy = oldChat;
          oldChatCopy.attributes.chat_data.messages.push({
            type: newMessage.type,
            text: { body: newMessage.message },
            id: new Date().toISOString(),
            from: "agent@tramy.io",
            status: "delivered",
            timestamp: moment().unix(),
          });
          return oldChatCopy;
        });

        return { previousChat };
      },
    }
  );

  // Current chat
  const { data: currentChat, isLoading: isLoadingCurrentChat } = useQuery(
    ["chat", chatId],
    async () => api.getChat(chatId, config),
    {
      retry: 3,
      enabled: Boolean(chatId),
      refetchInterval: 10000,
    }
  );

  // List chats
  const {
    data: chatList,
    isLoading: isLoadingChatList,
    isError: isErrorChatList,
  } = useQuery(
    ["chatList", debouncedFilter],
    async () => api.getChats(config, `?query=${debouncedFilter}`),
    {
      retry: 3,
      refetchInterval: 10000,
    }
  );

  if (isLoadingChatList) {
    return <Loader />;
  }

  if (isErrorChatList) {
    return <ServerError />;
  }

  return (
    <div className="chat">
      {/* Chat List */}
      <div className="chat__list">
        <section className="chat__list-options">
          <Search
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            placeholder={"Buscar chat por nombre, apellido o teléfono"}
            borderColor={"1px solid #dfdfdf"}
          />
          {/* <div className="chat__list-filter">
            <label htmlFor="chat__list-filter">Filtro:</label>
            <select name="browser">
              <option value="" selected>
                Todas las conversaciones
              </option>
              <option value="">Sin asignar</option>
              <option value="">Mis asignados</option>
            </select>
          </div> */}
        </section>
        <section className="chat__list-contacts">
          {chatList.map((chatCard) => (
            <ChatCard
              key={uuidv4()}
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
              notificationCount={chatCard?.attributes?.unanswered_messages}
            />
          ))}
        </section>
      </div>

      {/* Chat Window */}
      {chatList && !currentChat && !isLoadingCurrentChat ? (
        <div className="chat__welcome">
          <p>
            Mantente conectado en&nbsp; <BlackTrammyLogo />
          </p>
          <img src={WelcomeWallpaper} alt="Trammy wallpaper" />
        </div>
      ) : (
        <ChatWindow
          {...{
            currentChat,
            inputMessage,
            setInputMessage,
            pushMessage,
            isLoadingDeliveryMessage,
          }}
        />
      )}
    </div>
  );
}

export default Chat;

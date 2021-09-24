import React from "react";
import "./styles.css";
import Search from "../../UI/Search";
import ChatCard from "../../UI/ChatCard";
import ChatMessage from "../../UI/ChatMessage";
import Select from "../../UI/Select";
import Button from "../../UI/Button";
import defaultProfile from "../../../assets/img/default-profile.png";
import { ReactComponent as EmojiIcon } from "../../../assets/icons/emoji.svg";
import { ReactComponent as TemplateIcon } from "../../../assets/icons/template.svg";
import { ReactComponent as SendIcon } from "../../../assets/icons/send.svg";
import { ReactComponent as NoteIcon } from "../../../assets/icons/note.svg";
import { ReactComponent as FilterIcon } from "../../../assets/icons/filter.svg";
import { ReactComponent as AgentIcon } from "../../../assets/icons/agent.svg";
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
    return <p>Ups, ocurrió un error ...</p>;
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
      <div className="chat__window">
        <section className="chat__window-header">
          <div className="chat__window-about">
            <img src={defaultProfile} alt="" />
            <div>
              <h2>{"Benito Juarez"}</h2>
              <h3>{"954314490"}</h3>
            </div>
          </div>
          <div className="chat__window-options">
            <Select
              icon={<AgentIcon />}
              color={"#969696"}
              borderColor={"#dfdfdf"}
              backgroundColor={"white"}
              placeholder={"Diego Montes"}
            />
            <Select
              icon={<FilterIcon />}
              color={"#969696"}
              borderColor={"#dfdfdf"}
              backgroundColor={"white"}
              placeholder={"Nuevo Lead"}
            />

            <Button
              icon={<NoteIcon />}
              iconColor={"#969696"}
              content={"Notas"}
              backgroundColor={"white"}
              contentColor={"#969696"}
              borderColor={"1px solid #dfdfdf"}
            />
          </div>
        </section>
        <section className="chat__window-messages">
          <ChatMessage
            alignMessage={"flex-start"}
            backgroundMessage={"white"}
            content={
              "Hola, este es el número de Trammy? Quisiera comunicarme con un asesor de clientes."
            }
            time={"11/09/2021 10:35 a.m."}
            statusMessage={"sent"}
          />
          <ChatMessage
            alignMessage={"flex-end"}
            backgroundMessage={"#dcf8c6"}
            content={"Hola Benito, te saluda Trammy"}
            time={"11/09/2021 10:38 a.m."}
            statusMessage={"read"}
          />

          <ChatMessage
            alignMessage={"flex-start"}
            backgroundMessage={"white"}
            content={
              "Hola, este es el número de Trammy? Quisiera comunicarme con un asesor de clientes."
            }
            time={"11/09/2021 10:35 a.m."}
            statusMessage={"delivered"}
          />
          <ChatMessage
            alignMessage={"flex-end"}
            backgroundMessage={"#dcf8c6"}
            content={"Hola Benito, te saluda Trammy"}
            time={"11/09/2021 10:38 a.m."}
            statusMessage={"failed"}
          />
          <ChatMessage
            alignMessage={"flex-end"}
            backgroundMessage={"#dcf8c6"}
            content={"Hola Benito, te saluda Trammy"}
            time={"11/09/2021 10:38 a.m."}
            statusMessage={"deleted"}
          />
        </section>
        <section className="chat__window-textbox">
          <button>
            <EmojiIcon />
          </button>
          <div className="message-write">
            <button>
              <TemplateIcon />
            </button>
            <textarea type="text" placeholder="Escribir mensaje..."></textarea>
            <button type="submit">
              <SendIcon />
            </button>
          </div>
        </section>
      </div>
      {/* End Chat Window*/}
    </div>
  );
}

export default Chat;

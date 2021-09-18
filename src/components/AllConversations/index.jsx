import React from "react";
import "./styles.css";
import Search from "../UI/Search";
import ChatCard from "../UI/ChatCard";
import Select from "../UI/Select";
import Button from "../UI/Button";
import defaultProfile from "../../assets/img/default-profile.png";
import { ReactComponent as EmojiIcon } from "../../assets/icons/emoji.svg";
import { ReactComponent as TemplateIcon } from "../../assets/icons/template.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";
import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as AgentIcon } from "../../assets/icons/agent.svg";

function AllConversations({
  photoUrl = defaultProfile,
  fullname = "Benito Juarez",
  phone = "954314490",
}) {
  return (
    <div className="all-conversations">
      {/* Start Chat List */}
      <div className="chat__list">
        <section className="search__container">
          <Search
            placeholder={"Buscar por nombre, estado de embudo o agente"}
            borderColor={"1px solid #dfdfdf"}
          />
        </section>
        <section className="chat__container">
          <ChatCard
            fullname={"Benito Juarez"}
            messagePreview={"Hola Benito, te saluda Trammy"}
            agent={"Diego Montes"}
            funnelStage={"Nuevo Lead"}
            FunnelStageColor={"#ed3a4c"}
            time={"4:40pm"}
          />

          <ChatCard
            fullname={"Benito Juarez"}
            messagePreview={"Hola Benito, te saluda Trammy"}
            agent={"Diego Montes"}
            funnelStage={"Nuevo Lead"}
            FunnelStageColor={"#ed3a4c"}
            time={"4:40pm"}
          />

          <ChatCard
            fullname={"Carla Soliz"}
            messagePreview={"Hola Carla, te saluda Trammy"}
            agent={"Deyvi Conde"}
            funnelStage={"Contactado"}
            FunnelStageColor={"#F07539"}
            time={"5:25pm"}
          />
          <ChatCard
            fullname={"Carla Soliz"}
            messagePreview={"Hola Carla, te saluda Trammy"}
            agent={"Deyvi Conde"}
            funnelStage={"Contactado"}
            FunnelStageColor={"#F07539"}
            time={"5:25pm"}
          />
          <ChatCard
            fullname={"Carla Soliz"}
            messagePreview={"Hola Carla, te saluda Trammy"}
            agent={"Deyvi Conde"}
            funnelStage={"Contactado"}
            FunnelStageColor={"#F07539"}
            time={"5:25pm"}
          />
          <ChatCard
            fullname={"Carla Soliz"}
            messagePreview={"Hola Carla, te saluda Trammy"}
            agent={"Deyvi Conde"}
            funnelStage={"Contactado"}
            FunnelStageColor={"#F07539"}
            time={"5:25pm"}
          />
          <ChatCard
            fullname={"Carla Soliz"}
            messagePreview={"Hola Carla, te saluda Trammy"}
            agent={"Deyvi Conde"}
            funnelStage={"Contactado"}
            FunnelStageColor={"#F07539"}
            time={"5:25pm"}
          />
          <ChatCard
            fullname={"Carla Soliz"}
            messagePreview={"Hola Carla, te saluda Trammy"}
            agent={"Deyvi Conde"}
            funnelStage={"Contactado"}
            FunnelStageColor={"#F07539"}
            time={"5:25pm"}
          />
        </section>
      </div>
      {/* End Chat List */}

      {/* Start Chat Window */}
      <div className="chat__window">
        <section className="chat__header">
          <div className="chat__about">
            <img src={photoUrl} alt="" />
            <div>
              <h2>{fullname}</h2>
              <h3>{phone}</h3>
            </div>
          </div>
          <div className="chat__options">
            <Select
              icon={<FilterIcon />}
              color={"#969696"}
              borderColor={"#dfdfdf"}
              backgroundColor={"white"}
              placeholder={"Nuevo Lead"}
            />
            <Select
              icon={<AgentIcon />}
              color={"#969696"}
              borderColor={"#dfdfdf"}
              backgroundColor={"white"}
              placeholder={"Diego Ramos"}
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
        <section className="chat__messages"></section>
        <section className="chat__textbox">
          <button>
            <EmojiIcon />
          </button>
          <div className="container">
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

export default AllConversations;

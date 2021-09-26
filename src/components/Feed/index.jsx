import React from "react";
import "./styles.css";
import TrammyNews1 from "../../assets/img/trammy_news_1.svg";
import TrammyNews2 from "../../assets/img/trammy_news_2.svg";
import TrammyNews3 from "../../assets/img/trammy_news_3.svg";
import PostCard from "../UI/PostCard";
import { getProfile } from "../../services/api/profile";
import { useQuery } from "react-query";
import useToken from "../../hooks/useToken";

function Feed({ firstName = "Deyvi" }) {
  const { token } = useToken();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const { data: profile } = useQuery(
    "profile",
    async () => getProfile(config),
    {
      retry: 3,
    }
  );
  return (
    <div className="feed">
      {/* Feed Welcome */}
      <section className="feed__welcome">
        <h3>Hola, {profile?.first_name} 👋 </h3>
        <p>¡Te damos la bienvenida a Tramy!</p>
        <hr />
      </section>

      {/* Feed list of integrated channels */}
      <section className="feed__blogs">
        <div className="blogs__main-new">
          <div className="main-new__video">
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/bBZqQCCB9nM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="main-new__info">
            <h2>Tour por la plataforma</h2>
            <p>
              En este video podrás visualizar las principales funcionalidades de
              tramy para tu empresa.
            </p>
          </div>
        </div>
        <div className="blogs__posts">
          <h3>Últimas publicaciones</h3>
          <div className="flex-container">
            <PostCard
              image={TrammyNews1}
              title={"¿Qué es el comercio conversacional?"}
              link={"https://tramy.substack.com/p/comercio-conversacional"}
            />
            <PostCard
              image={TrammyNews2}
              title={
                "Cuatro pasos para integrar la API de WhatsApp a tu negocio"
              }
              link={"https://tramy.substack.com/p/intregar-api-whatsapp"}
            />
            <PostCard
              image={TrammyNews3}
              title={"Razones para apostar por el comercio conversacional"}
              link={"https://tramy.substack.com/p/tramy"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feed;

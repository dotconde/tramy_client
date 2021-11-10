import React from "react";
import "./styles.css";
import { tutorialLink } from "../../constants/urls";
import { blogArray, tutorialDescription } from "../../constants/contents";
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
              src={tutorialLink}
              title="Loom video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
          <div className="main-new__info">
            <h2>Tour por la plataforma</h2>
            <p>{tutorialDescription}</p>
          </div>
        </div>
        <div className="blogs__posts">
          <h3>Últimas publicaciones</h3>
          <div className="flex-container">
            {blogArray.map((blog) => (
              <PostCard
                image={blog.image}
                title={blog.title}
                link={blog.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feed;

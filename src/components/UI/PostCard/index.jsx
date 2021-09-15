import React from "react";
import "./styles.css";

function PostCard({ image, title, link }) {
  return (
    <article className="post-container">
      <div>
        <img src={image} alt="" />
        <p>{title}</p>
      </div>
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          Ver más
        </a>
      </div>
    </article>
  );
}

export default PostCard;

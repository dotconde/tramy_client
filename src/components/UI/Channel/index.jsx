import React from "react";
import "./styles.css";
import { ReactComponent as CheckIcon } from "../../../assets/icons/check.svg";
import { ReactComponent as CrossIcon } from "../../../assets/icons/cross.svg";

function Channel({ icon, title, content, channelStatus = false }) {
  return (
    <div>
      <article className="channel">
        <div className="channel__icon">
          <span>{icon}</span>
        </div>
        <div className="channel__description">
          <h5>{title}</h5>
          <p>{content}</p>
        </div>
        <div className="channel__status">
          {/* Wrap checkIcon within img for compatibility purposes */}

          <p>
            {channelStatus ? (
              <span className="channel-active">
                <CheckIcon /> Conectado
              </span>
            ) : (
              <span className="channel-inactive">
                <CrossIcon /> No conectado
              </span>
            )}
          </p>
        </div>
      </article>
    </div>
  );
}

export default Channel;

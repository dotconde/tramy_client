import React from "react";
import "./styles.css";
import { ReactComponent as CheckIcon } from "../../../assets/icons/check.svg";
import { ReactComponent as CrossIcon } from "../../../assets/icons/cross.svg";
import { ReactComponent as SetupIcon } from "../../../assets/icons/setup.svg";
import Button from "../Button";

function SetupCard({
  icon,
  title,
  subtitle,
  content,
  connexionStatus = false,
}) {
  return (
    <div>
      <article className="setup-card">
        <div className="setup-card__icon">
          <span>{icon}</span>
        </div>
        <div className="setup-card__description">
          <span>
            <h5>{title}</h5>
            <h2>{subtitle}</h2>
          </span>
          <p>{content}</p>
        </div>
        <div className="setup-card__status">
          {/* Wrap checkIcon within img for compatibility purposes */}

          <p>
            {connexionStatus ? (
              <span className="status-active">
                <CheckIcon /> Conectado
              </span>
            ) : (
              <span className="status-inactive">
                <CrossIcon /> No conectado
              </span>
            )}
          </p>
        </div>
        <div className="setup-card__button">
          <Button
            icon={<SetupIcon />}
            iconColor={"#9a9a9a"}
            content={"Configuración"}
            backgroundColor={"white"}
            contentColor={"#9a9a9a"}
            borderColor={"transparent"}
          />
        </div>
      </article>
    </div>
  );
}

export default SetupCard;

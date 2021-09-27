import React from "react";
import "./styles.css";
import { ReactComponent as CheckIcon } from "../../../assets/icons/check.svg";
import { ReactComponent as CrossIcon } from "../../../assets/icons/cross.svg";
// import { ReactComponent as SetupIcon } from "../../../assets/icons/setup.svg";
// import Button from "../Button";

function SetupCard({
  icon,
  title,
  businessPhone,
  content,
  conectionStatus = undefined,
}) {
  let displayStatus;

  switch (conectionStatus) {
    case true:
      displayStatus = (
        <span className="status-active">
          <CheckIcon /> Conectado
        </span>
      );
      break;
    case false:
      displayStatus = (
        <span className="status-inactive">
          <CrossIcon /> No conectado
        </span>
      );
      break;
    default:
      displayStatus = "";
  }

  return (
    <div>
      <article className="setup-card">
        <div className="setup-card__icon">{icon}</div>
        <div className="setup-card__description">
          <h1>
            {title} {businessPhone}
          </h1>
          <p>{content}</p>
        </div>
        <div className="setup-card__status">{displayStatus}</div>

        {/* <div className="setup-card__button">
          <Button
            icon={<SetupIcon />}
            iconColor={"#9a9a9a"}
            content={"Configuración"}
            backgroundColor={"white"}
            contentColor={"#9a9a9a"}
            borderColor={"transparent"}
          />
        </div> */}
      </article>
    </div>
  );
}

export default SetupCard;

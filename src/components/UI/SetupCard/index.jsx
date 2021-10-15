import React from "react";
import "./styles.css";
import { ReactComponent as CheckIcon } from "../../../assets/icons/check.svg";
import { ReactComponent as CrossIcon } from "../../../assets/icons/cross.svg";
import { ReactComponent as ClockIcon } from "../../../assets/icons/clock.svg";
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
    case "1":
      displayStatus = (
        <span className="status__active">
          <CheckIcon /> Conectado
        </span>
      );
      break;
    case "2":
      displayStatus = (
        <span className="status__inactive">
          <CrossIcon /> No conectado
        </span>
      );
      break;
    case "3":
      displayStatus = (
        <span className="status__coming-soon">
          <ClockIcon /> Muy Pronto
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

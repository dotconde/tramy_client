import React from "react";
import "./styles.css";
import { initialName } from "../../helpers/formatters/naming";

function ClientAvatar({ firstName = "" }) {
  return <div className="client-avatar">{initialName(firstName)}</div>;
}

export default ClientAvatar;

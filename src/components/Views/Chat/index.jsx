import React from "react";
import "./styles.css";
import { ReactComponent as UnasignedIcon } from "../../../assets/icons/remove-user.svg";
import { ReactComponent as AssignedToMeIcon } from "../../../assets/icons/group.svg";
import { ReactComponent as BuzonIcon } from "../../../assets/icons/buzon.svg";
import AllConversations from "../../AllConversations";

function Chat() {
  return (
    <div className="chat__tabset">
      {/* Sin asignar Tab */}
      <input
        type="radio"
        name="chat__tabset"
        id="unassigned__tab"
        aria-controls="unassigned__tab"
        defaultChecked={true}
      />
      <label for="unassigned__tab">
        <UnasignedIcon />
        <span>Sin asignar Test</span>
      </label>

      {/* Mis asignados Tab */}
      <input
        type="radio"
        name="chat__tabset"
        id="assigned-to-me__tab"
        aria-controls="assigned-to-me__tab"
      />
      <label for="assigned-to-me__tab">
        <AssignedToMeIcon />
        <span>Mis asignados</span>
      </label>

      {/* Todas las conversaciones Tab */}
      <input
        type="radio"
        name="chat__tabset"
        id="all-conversations__tab"
        aria-controls="all-conversations__tab"
      />
      <label for="all-conversations__tab">
        <BuzonIcon />
        <span>Todas las conversaciones</span>
      </label>

      {/* Contents */}
      <div class="chat__tab-panels">
        <section id="unasigned__tab" className="chat__tab-panel">
          <span>component 1</span>
        </section>

        <section id="asigned-to-me__tab" className="chat__tab-panel">
          <span>component 2</span>
        </section>

        <section id="all-conversations__tab" className="chat__tab-panel">
          <AllConversations />
        </section>
      </div>
    </div>
  );
}

export default Chat;

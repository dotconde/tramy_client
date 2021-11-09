import React from "react";
import "./styles.css";
import Home from "../Views/Home";
import Chat from "../Views/Chat";
import Clients from "../Views/Clients";
import Funnel from "../Views/Funnel";
import Analytics from "../Views/Analytics";
import Setup from "../Views/Setup";
import { Route, Switch } from "react-router-dom";

function MainView() {
  return (
    <div className="mainview">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/funnel" component={Funnel} />
        <Route exact path="/analytics" component={Analytics} />
        <Route exact path="/setup" component={Setup} />
      </Switch>
    </div>
  );
}

export default MainView;

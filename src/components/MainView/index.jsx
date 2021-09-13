import React from "react";
import Home from "../Views/Home";
import Team from "../Views/Team";
import Clients from "../Views/Clients";
import Funnel from "../Views/Funnel";
import Setup from "../Views/Setup";
import { Route, Switch } from "react-router-dom";

function MainView() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Chat></Chat> */}
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/funnel" component={Funnel} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/setup" component={Setup} />
      </Switch>
    </div>
  );
}

export default MainView;

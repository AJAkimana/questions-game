import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./login";
import CreateGameRoom from "./createGameRoom";
import GameResult from "./gameResult";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/CreateGameRoom" component={CreateGameRoom} />
      <Route path="/gameResult" component={GameResult} />
      <Redirect from="/" to="/login" />
    </Switch>
  );
};

export default Routes;

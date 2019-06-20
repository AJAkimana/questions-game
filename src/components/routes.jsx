import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./login";
import CreateGameRoom from "./createGameRoom";
import GameResult from "./gameResult";
import Verify from "./verify";
import { connect } from "react-redux";
import PrivateRoute from "../helpers/privateRoute";
import startGame from "./startGame";
import Waiting from "./waiting";

const Routes = props => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute
        path="/gameResult"
        component={GameResult}
        isAuthenticated={props.auth.isAuthenticated}
      />
      <PrivateRoute
        path="/CreateGameRoom"
        component={CreateGameRoom}
        isAuthenticated={props.auth.isAuthenticated}
      />
      <Route path="/verify/:token" component={Verify} />
      <PrivateRoute
        path="/waiting/:roomId"
        component={Waiting}
        isAuthenticated={props.auth.isAuthenticated}
      />
      <PrivateRoute
        path="/startGame"
        component={startGame}
        isAuthenticated={props.auth.isAuthenticated}
      />
      <Redirect from="/" to="/login" />
    </Switch>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Routes);

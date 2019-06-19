import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './login';
import CreateGameRoom from './createGameRoom';
import GameResult from './gameResult';
import Verify from './verify';
import { connect } from 'react-redux';
import PrivateRoute from '../helpers/privateRoute';
import startGame from './startGame';

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
      <Route path="/startGame" component={startGame} />
      <Redirect from="/" to="/login" />
    </Switch>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Routes);

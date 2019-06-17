import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import Login from "./components/login";

function App() {
  return (
    <Provider store = { store }>
    <BrowserRouter>
      <Switch>
      <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;

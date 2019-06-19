import React from "react";
import { BrowserRouter } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./components/routes";
import {setCurrentUser, logoutUser} from './store/actions/authentication'

function App() {
  if(localStorage.token){
    const user = jwtDecode(localStorage.token);
    store.dispatch(setCurrentUser(user));
    const currentTime = Date.now() / 1000;
    if(user.exp<currentTime){
        store.dispatch(logoutUser());
        window.location.href = '/login';
    }
 }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

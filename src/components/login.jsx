import React, { Component } from "react";
import gmailLogo from '../assets/img/gmail.png'

import "../index";
class Login extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Game</h1>
        <p>Sign up below using:</p>
        <img src={gmailLogo} alt="Facebook logo" />
      </div>
    );
  }
}

export default Login;

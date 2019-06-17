import React, { Component } from "react";
import gmailLogo from "../assets/img/gmail.png";
import riderslogo from "../assets/img/riders-logo-png.png";

import "../index";
class Login extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <img src={riderslogo} alt="Logo" className="logo" />
        <h1>Welcome to our Gaming room</h1>
        <p>Sign up / Login below using:</p>
        <img src={gmailLogo} alt="Facebook logo" className="icon" />
      </div>
    );
  }
}

export default Login;

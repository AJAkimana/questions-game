import React, { Component } from "react";
import gmailLogo from "../assets/img/gmail.png";
import riderslogo from "../assets/img/riders-logo-png.png";


const { REACT_APP_API_URL } = process.env;

class Login extends Component {

  render() { 
    return (
      <div className="container">
        <img src={riderslogo} alt="Logo" className="logo" />
        <h1>Welcome to our Gaming room</h1>
        <p>Sign up / Login below using:</p>
        <a href ={`${REACT_APP_API_URL}/api/v1/login/google`} >
        <img src={gmailLogo} alt="Facebook logo" className="icon" />
        </a>
      </div>
    );
  }
}



export default Login;


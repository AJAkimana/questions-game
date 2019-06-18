import React, { Component } from "react";

import avatar from "../assets/img/fiston.png";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="user-dashboard">
        <img src={avatar} alt="user logo" className="avatar" />
        <figcaption>Kabalisa Fiston</figcaption>
        <b>Player 1</b>
        <br />
        <input type="button" value="Log Out" className="input logout" />
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from "react";

import riderslogo from "../assets/img/riders-logo-png.png";
import avatar from "../assets/img/avatar.jpg";

class CreateGameRoom extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img src={riderslogo} alt="Logo" className="header-logo" />
        <div className="container create-game-room overflow">
          <h1>Game Result</h1>
          <div class="card">
            <span className="pull-left">1</span>
            <span className="user-info">
            <img src={avatar} alt="profile"/>
            <figcaption>Eric Nyirimana</figcaption>
            </span>
            <span className="pull-right">POINT: 10/10</span>
            <br/>
            <br/>
            <span className="pull-right badge-green">EXCELLENT</span>
            </div>
            <div class="card">
            <span className="pull-left">2</span>
            <span className="user-info">
            <img src={avatar} alt="profile"/>
            <figcaption>Eric Nyirimana</figcaption>
            </span>
            <span className="pull-right">POINT: 7/10</span>
            <br/>
            <br/>
            <span className="pull-right badge-yellow">GOOD</span>
            </div>
            <div class="card">
            <span className="pull-left">3</span>
            <span className="user-info">
            <img src={avatar} alt="profile"/>
            <figcaption>Eric Nyirimana</figcaption>
            </span>
            <span className="pull-right">POINT: 4/10</span>
            <br/>
            <br/>
            <span className="pull-right badge-red">BAD</span>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateGameRoom;

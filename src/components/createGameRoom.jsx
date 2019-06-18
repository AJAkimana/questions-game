import React, { Component } from "react";

import riderslogo from "../assets/img/riders-logo-png.png";

class CreateGameRoom extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img src={riderslogo} alt="Logo" className="header-logo" />
        <div className="container create-game-room">
          <h1>Create a game room</h1>
          <input type="text" placeholder="Game Room name" />
          <h2>Send Invitations</h2>
          <input
            type="text"
            placeholder="Player Email"
            className="invitation"
          />
          <i
            class="fa fa-plus addInvitation"
            style={{ color: "green", fontSize: "25px" }}
          />
          <div className="invitedPlayers">
            <i
              class="fa fa-user-circle"
              style={{
                color: "black",
                fontSize: "35px",
                cursor: "pointer",
                float: "left",
                margin: "-8px 0 0px 0"
              }}
            />
            innocent.fiston-kabalisa
            <i
              class="fa fa-minus-circle"
              style={{
                color: "#ef3405",
                fontSize: "25px",
                cursor: "pointer",
                float: "right"
              }}
            />
          </div>
          <div className="invitedPlayers">
            <i
              class="fa fa-user-circle"
              style={{
                color: "black",
                fontSize: "35px",
                cursor: "pointer",
                float: "left",
                margin: "-8px 0 0px 0"
              }}
            />
            innocent.fiston-kabalisa{" "}
            <i
              class="fa fa-minus-circle"
              style={{
                color: "#ef3405",
                fontSize: "25px",
                cursor: "pointer",
                float: "right"
              }}
            />
          </div>
          <input type="button" value="Create Room" className="input btn-blue" />
        </div>
      </React.Fragment>
    );
  }
}

export default CreateGameRoom;

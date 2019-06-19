import React, { Component } from "react";
import { connect } from "react-redux";

import riderslogo from "../assets/img/riders-logo-png.png";
import Dashboard from "./userDashboard";
import {
  setPlayer,
  invitePlayer,
  removePlayer,
  roomName,
  createRoom
} from "../store/actions/invitePlayers";

class CreateGameRoom extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <img src={riderslogo} alt="Logo" className="header-logo" />
        <div className="grid">
          <div className="container create-game-room">
            <h1>Create a game room</h1>
            <input
              type="text"
              placeholder="Game Room name"
              value={this.props.invitation.roomName}
              onChange={e => this.props.roomName(e.target.value)}
            />
            <h2>Send Invitations</h2>
            <input
              type="email"
              placeholder="Player Email"
              className="invitation"
              value={this.props.invitation.inputtedUser}
              onChange={e => this.props.setPlayer(e.target.value)}
            />
            <i
              className="fa fa-plus addInvitation"
              style={{ color: "green", fontSize: "25px" }}
              onClick={this.handlePlayers}
            />
            {this.props.invitation.invitedUsers.map((user, key) => {
              return (
                <div key={key} className="invitedPlayers" id={key}>
                  <i
                    className="fa fa-user-circle"
                    style={{
                      color: "black",
                      fontSize: "35px",
                      cursor: "pointer",
                      float: "left",
                      margin: "-8px 0 0px 0"
                    }}
                  />
                  {user}
                  <i
                    className="fa fa-minus-circle"
                    style={{
                      color: "#ef3405",
                      fontSize: "25px",
                      cursor: "pointer",
                      float: "right"
                    }}
                    onClick={() => this.props.removePlayer(user)}
                  />
                </div>
              );
            })}
            <input
              type="button"
              value="Create Room"
              className="input btn-blue"
              onClick={this.handleCreate}
            />
          </div>
          <Dashboard userInfo={this.props.auth} />
        </div>
      </React.Fragment>
    );
  }

  handleCreate = () => {
    const { invitation } = this.props;
    this.props.createRoom(invitation.roomName, invitation.invitedUsers);
    this.props.history.push("/startGame");
  };

  handlePlayers = () => {
    if (
      !this.props.invitation.inputtedUser ||
      !/\S+@\S+\.\S+/i.test(this.props.invitation.inputtedUser)
    )
      return alert("Invalida email or empty email");
    this.props.invitePlayer(this.props.invitation.inputtedUser);
  };
}

const mapStateToProps = state => ({
  auth: state.auth,
  invitation: state.invitation
});

export default connect(
  mapStateToProps,
  { setPlayer, invitePlayer, removePlayer, roomName, createRoom }
)(CreateGameRoom);

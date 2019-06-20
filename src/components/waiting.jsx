import React, { Component } from "react";
import { connect } from "react-redux";
import socketIo from "../helpers/socket";
import socket from "../helpers/socket";

class Waiting extends Component {

  componentDidMount() {
    const roomId = this.props.match.params.roomId;
    socket.emit('create', {name: roomId});
    socketIo.on('Alljoined',() =>{
      console.log('All Joined');
      this.props.history.push('/startGame');
    });
    const user = this.props.auth.user;
    socketIo.emit('joined', {user,roomId});
  }
  
  render() {
    return <h1>Waiting for other user to JOIN !!</h1>;
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Waiting);

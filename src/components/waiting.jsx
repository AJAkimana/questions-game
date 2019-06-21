import React, { Component } from "react";
import { connect } from "react-redux";
import socketIo from "../helpers/socket";
import socket from "../helpers/socket";
import riderslogo from '../assets/img/riders-logo-png.png';
import loading from '../assets/img/loading.gif';

class Waiting extends Component {

  componentDidMount() {
    const roomId = this.props.match.params.roomId;
    socket.emit('create', {name: roomId});
    socketIo.on('Alljoined',() =>{
      this.props.history.push(`/startGame/${roomId}`);
    });
    const user = this.props.auth.user;
    socketIo.emit('joined', {user,roomId});
  }
  
  render() {
    return (
			<React.Fragment>
				<img src={riderslogo} alt="Logo" className="header-logo" />
				<div className="container">
					<h1>Waiting for other user to JOIN !!</h1>
          <img src={loading} alt="Loading" style={{ width: "20%" }}/>
				</div>
			</React.Fragment>
		);
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Waiting);

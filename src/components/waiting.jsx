import React, { Component } from "react";
import { connect } from "react-redux";
import socketIo from "../helpers/socket";

class Waiting extends Component {
  componentWillUpdate(){
    socketIo.on('Alljoined',() =>{
      console.log('All Joined');
      this.props.history.push('/startGame');
    });
  }
  componentDidMount() {
    const roomId = this.props.match.params.roomId;
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

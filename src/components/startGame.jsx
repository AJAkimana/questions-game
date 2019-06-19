import React, { Component } from 'react';
import DisplayTimer from './timerDisplay';
import riderslogo from '../assets/img/riders-logo-png.png';
import PlayerInvitation from './invitePlayer';

class startGame extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <img src={riderslogo} alt="Logo" className="logo" />
        <p>Timer</p>
        <DisplayTimer />
        <PlayerInvitation />
      </div>
    );
  }
}

export default startGame;

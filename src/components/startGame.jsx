import React, { Component } from 'react';
import riderslogo from '../assets/img/riders-logo-png.png';
import Countdown from 'react-countdown-now';


class startGame extends Component {
  state = {};
  renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
    this.props.history.push('/questions');
      return <h2>done</h2>;
    } else {
      return (
        <h1>
          {hours}:{minutes}:{seconds}
        </h1>
      );
    }
  };
  render() {
    return (
      <div className="container">
        <img src={riderslogo} alt="Logo" className="logo" />
        <p>Timer</p>
        <div className="display">
        <Countdown date={Date.now() + 10000} renderer={this.renderer} />
      </div>
      </div>
    );
  }
}


export default startGame;

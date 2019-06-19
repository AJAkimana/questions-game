import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

// Random component
const Completionist = () => <h1>You are good to go!</h1>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <h1>
        {hours}:{minutes}:{seconds}
      </h1>
    );
  }
};
class CountDown extends Component {
  render() {
    return <Countdown date={Date.now() + 10000} renderer={renderer} />;
  }
}
export default CountDown;

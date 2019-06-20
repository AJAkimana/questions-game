import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

const Completionist = () => <h1>You are good to go!</h1>;


const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
    // this.props.history.push('/question');
  } else {
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

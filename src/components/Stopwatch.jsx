import React, { Component } from 'react';
import Countdown from 'react-countdown-now';




const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
this.props.history.push('/questions');
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

import React, { Component } from 'react';
import Countdown from './Stopwatch';

class DisplayTimer extends Component {
  render() {
    return (
      <div className="display">
        <Countdown />
        <button>Start</button>
      </div>
    );
  }
}
export default DisplayTimer;

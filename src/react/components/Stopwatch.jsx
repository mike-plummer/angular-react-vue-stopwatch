import React from 'react';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { Constants } from '../../common';

export class Stopwatch extends React.Component {

  subscription = null;

  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({
      time: 0.0,
      previousTimes: [],
      active: false
    });
  }

  render() {
    const previousTime = this.state.previousTimes.reduce((prev, cur) => prev + cur, 0);

    return <div>
      <h2>{ this.state.time.toFixed(2) }</h2>
      <button onClick={this.start.bind(this)} disabled={this.state.active}>Start</button>
      <button onClick={this.stop.bind(this)} disabled={!this.state.active}>Stop</button>
      <button onClick={this.reset.bind(this)}>Reset</button>
      { previousTime + this.state.time > 0 && ( <p>Total elapsed time: { (previousTime + this.state.time).toFixed(2) }</p> ) }

      <ol>
      { this.state.previousTimes.map((time, index) => <li key={index}>{time.toFixed(2)}</li>) }
      </ol>
    </div>
  }

  start() {
    this.subscription = IntervalObservable.create(Constants.PERIOD).subscribe(() => {
      this.setTime(this.state.time + Constants.INCREMENT);
    });
    this.setActive(true);
  }

  stop() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
    this.setActive(false);
  }

  reset() {
    this.stop();
    this.addPreviousTime(this.state.time);
    this.setTime(0.0);
  }

  addPreviousTime(prevTime) {
    this.state.previousTimes.push(prevTime);

    this.setState({
      previousTimes: this.state.previousTimes
    });
  }

  setTime(time) {
    this.setState({
      time
    });
  }

  setActive(active) {
    this.setState({
      active
    });
  }
}

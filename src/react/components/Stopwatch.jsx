import React from 'react';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { Constants } from '../../common';

export class Stopwatch extends React.Component {

  subscription = null;

  constructor() {
    super();
  }

  componentWillMount() {
    this.setTime(0.0);
  }

  render() {
    return <div>
      <h2>{ this.state.time.toFixed(2) }</h2>
      <button onClick={this.start.bind(this)} disabled={this.state.active}>Start</button>
      <button onClick={this.stop.bind(this)} disabled={!this.state.active}>Stop</button>
      <button onClick={this.reset.bind(this)}>Reset</button>
      { this.state.elapsedTime + this.state.time > 0 && ( <p>Total elapsed time: { (this.state.elapsedTime + this.state.time).toFixed(2) }</p> ) }
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
    this.state.elapsedTime += this.state.time;
    this.setTime(0.0);
  }

  setTime(time) {
    this.setState({
      elapsedTime: this.elapsedTime,
      time
    });
  }

  setActive(active) {
    this.setState({
      active
    });
  }

  get elapsedTime() {
    return this.state ? this.state.elapsedTime : 0.0;
  }
}

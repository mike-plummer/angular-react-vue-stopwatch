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
      <p>{ this.state.time.toFixed(2) }</p>
      <button onClick={this.start.bind(this)} disabled={this.state.active}>Start</button>
      <button onClick={this.stop.bind(this)} disabled={!this.state.active}>Stop</button>
      <button onClick={this.reset.bind(this)}>Reset</button>
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
    this.setTime(0.0);
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

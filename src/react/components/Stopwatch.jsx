import React from 'react';

export class Stopwatch extends React.Component {

  constructor() {
    super();
    this.state = {
      time: ''
    };
  }

  render() {
    return <p>
      React stopwatch!
    </p>
  }
}

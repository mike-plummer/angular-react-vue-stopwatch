<template>
  <div>
    <h2>{{ time | number }}</h2>
    <button v-on:click="start" v-bind:disabled="isRunning">Start</button>
    <button v-on:click="stop" v-bind:disabled="!isRunning">Stop</button>
    <button v-on:click="reset">Reset</button>
    <p v-if="elapsedTime + time > 0">Total elapsed time: {{ elapsedTime + time | number }}</p>
  </div>
</template>

<script>
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Subscription } from 'rxjs/Subscription';
import { Constants } from '../../common';

let subscription = null;

const state = {
  time: 0.0,
  elapsedTime: 0.0,
  isRunning: false
};

const start = () => {
  if (state.isRunning) return;

  state.isRunning = true;
  subscription = IntervalObservable.create(Constants.PERIOD).subscribe(() => state.time += Constants.INCREMENT);
};

const stop = () => {
  if (!state.isRunning) return;

  state.isRunning = false;
  if (subscription) {
    subscription.unsubscribe();
    subscription = null;
  }
};

const reset = () => {
  stop();
  state.elapsedTime += state.time;
  state.time = 0.0;
};

export default {
  name: 'stopwatch',
  data() {
    return state;
  },
  filters: {
    number: value => {
      return value.toFixed(2);
    }
  },
  methods: {
    start,
    stop,
    reset
  }
}
</script>

<style scoped>

</style>

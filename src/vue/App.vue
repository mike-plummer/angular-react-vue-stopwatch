<template>
  <div id="app">
    <stopwatch></stopwatch>
  </div>
</template>

<script>
import Stopwatch from './components/Stopwatch'

export default {
  name: 'app',
  components: {
    Stopwatch
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

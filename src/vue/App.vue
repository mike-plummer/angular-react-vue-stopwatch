<template>
  <div id="app">
    <h1>Vue</h1>
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

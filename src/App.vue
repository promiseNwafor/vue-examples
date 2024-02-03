<template>
  <h1>Reaction game</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Results v-if="showResults" :score="score" />
  <div v-if="isPlaying">
    <Block :delay="delay" @end="endGame" />
  </div>
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";

export default {
  name: "App",
  components: {
    Block,
    Results,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.delay = 2000 + Math.random() * 2000;
      this.showResults = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>

<style>
body {
  background-color: rgb(235, 225, 225);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  background-color: rgb(51, 178, 136);
  color: aliceblue;
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 100px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 100ms ease-in-out;
}
button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>

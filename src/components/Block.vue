<template>
  <div v-if="showBlock" class="card" @click="this.stopTimer">
    <p>Click me fast</p>
  </div>
</template>

<script>
import Results from "./Results.vue";

export default {
  components: { Results },
  props: ["delay"],
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
    },
  },
};
</script>

<style>
.card {
  background-color: rgb(57, 173, 150);
  color: rgb(210, 249, 241);
  padding: 10px;
  border-radius: 5px;
  width: 100px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 350px;
  height: 200px;
  margin: auto;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div class="result">
    <p>Reaction time: {{ score }} ms</p>
    <h3 class="rank">{{ rank }}</h3>
  </div>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    switch (true) {
      case this.score < 300:
        this.rank = "Super fast bingo!";
        break;

      case this.score < 400:
        this.rank = "Yoo fast bingo!";
        break;

      case this.score < 500:
        this.rank = "Bingo awesomeness!";
        break;

      case this.score < 600:
        this.rank = "I love your motive!";
        break;

      case this.score < 700:
        this.rank = "You'll get there next time!";
        break;

      default:
        this.rank = "Let go again!";
        break;
    }
  },
};
</script>

<style>
.rank {
  font-size: 24px;
  color: rgb(53, 140, 122);
  font-weight: 700;
}
</style>

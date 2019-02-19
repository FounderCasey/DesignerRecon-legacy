<template>
  <div class="confetti"><canvas ref="canvas"></canvas></div>
</template>

<script>
import Confetti from '../confetti.js'

export default {
  mounted() {
    this.canvas = new Confetti(this.$refs.canvas);
    this.canvas.start();
    window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    resize() {
      window.requestAnimationFrame(() => {
        this.canvas.resize();
      });
    }
  }
};
</script>

<style scoped>
  .confetti{
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    pointer-events: none;
  }

  canvas {
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }
</style>

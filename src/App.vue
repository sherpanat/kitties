<template>
  <div id="app">
    <p v-if="loading">loading...</p>
    <h1>{{ helloMessage }}</h1>
    <img
      :src="cat.url"
      :alt="cat.name"
    >
    <input type="text" v-model="helloMessage">
  </div>
</template>

<script>
import { cats, getRandomCat } from "./utils.js"
export default {
  name: "app",
  data(){
    return {
      loading: true,
      helloMessage: "Hello World",
      cats,
      cat: {}
    };
  },
  methods: {
    updateCat() {
      return getRandomCat(this.cats);
    }
  },
  mounted() {
    setInterval(() => {
      this.cat = this.updateCat();
    }, 2000);
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.cats {
  height: 600px;
  width: 600px;
  margin: 0 auto;
}

img {
  width: 100%
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

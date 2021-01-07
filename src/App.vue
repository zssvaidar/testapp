<template>
  <div id="app">
    {{$store.state.posts}}
    <Main v-bind:posts="$store.state.posts" />
  </div>
</template>

<script>

import Main from './components/main.vue'
export default {
  name: 'App',
  components: {
    Main 
  },
  speed: {
    type: Number,
    default: 10000
  },
  mounted() {
    this.$store.state.posts = [{id:0, title: "nice", body:'is so good'}]
    setTimeout(this.countdown, 1000);
  },
  methods: {
    countdown() {
      this.$store.dispatch("getPosts");
      setTimeout(this.countdown, 1000);
  }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

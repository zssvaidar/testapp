<template>
  <div id="app">
    {{$store.state.posts}}
    <Main v-bind:posts="$store.state.posts" />
    {{$cookies.get('ids')}} 

    {{$store.state.idcount}}
  </div>
</template>

<script>

import Vue from 'vue'
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
    
    if(Vue.$cookies.get('ids'))
    {
      var ids = Vue.$cookies.get('ids');
      ids.push(ids[ids.length - 1] + 1)
      Vue.$cookies.set('ids', ids );
    }
    else
      Vue.$cookies.set('ids', [0,] );

    // this.$store.state.idcount+=1;

    
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

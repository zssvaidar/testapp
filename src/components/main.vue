

<template>

  <div >
    {{posts}}
    <h1> {{ msg }} </h1>
    
    <div v-for='post in posts' :key='post.id'>
  <h3>Post Title: </h3>
  {{post.title}}
       Post Body:
      {{post.body}}
    </div>
    <h2>Essential Links</h2>
  </div>
</template>

<script>


export default {
  name: 'Main',
 data () {
    return {
      msg: 'Welcome to my Vuex Store'
    }
  },
  computed: {
    posts() {
    return this.$store.state.posts
    }
  }
  // ,mounted() {
    // this.$store.dispatch("getPosts");
  // }

}

</script>


<style scoped>
 
</style>




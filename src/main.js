import Vue from 'vue'
import App from './App.vue' 
import store from './components/store'


const NotFound = { template: '<div app="id"> <p>Page not found</p></div>' }

const routes = {
  '/': App,
}

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

Vue.$cookies.config('1h')

new Vue({
  el: '#app',
  store,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})

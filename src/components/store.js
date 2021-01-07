import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
    posts: []
}

const getters = {}

const actions = {
     getPosts({ commit }) {
    let config = {
        'headers': {
          lastid: 0,
        }
      }
    axios.get('http://localhost:5000/', config)
        .then(response => {
        commit('SET_POSTS', response.data)
        })
    }
}

const mutations = {
    SET_POSTS(state, posts) {
    // state.posts = posts
    state.posts = state.posts.concat(posts);
    }
}

export default new Vuex.Store({
state,
getters,
actions,
mutations
})
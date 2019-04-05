import Vue from 'vue'
import Vuex from 'vuex'
import request from 'axios'

request.defaults.baseURL = 'https://www.reddit.com/'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      posts: [/* Массив новостей Reddit */]
    },
    actions: {
      FETCH_POSTS: ({ commit }, subReddit) => {
        const url = 'r/all/top.json?limit=30&count=30'
        return request.get(url).then(response => {
          commit('SET_ITEMS', response.data.data.children)
        })
      }
    },
    mutations: {
      SET_ITEMS: (state, items) => {
        items.forEach((item, i) => {
          if (item) {
            Vue.set(state.posts, i, item.data)
          }
        })
      }
    },
    getters: {
      getPosts: state => state.posts
    }
  })
}

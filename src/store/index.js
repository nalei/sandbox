import Vue from 'vue'
import Vuex from 'vuex'
import { fetchApi } from '../api'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      posts: {/* Массив новостей Reddit */}
    },
    actions: {
      FETCH_POSTS: ({ commit }, subReddit) => {
        const url = 'r/' + subReddit + '/top.json?limit=3&count=3'
        fetchApi(url).then(response => commit('SET_ITEMS', response.data.children))
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
      posts: state => state.posts,
      loading: state => state.loading
    }
  })
}

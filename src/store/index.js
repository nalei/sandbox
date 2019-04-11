import Vue from 'vue'
import Vuex from 'vuex'
import { fetchPosts } from '../api'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      posts: [/* Массив новостей Reddit */],
      postsLoading: true
    },
    actions: {
      /**
       * Получает топ 30 новостей Reddit, и записывает в posts
       * @return {Promise} - set items to posts
       */
      FETCH_POSTS: ({ commit }) => {
        const url = 'r/all/top.json?limit=20&count=20'
        return fetchPosts(url).then(response => commit('SET_ITEMS', response.data.data.children))
      }
    },
    mutations: {
      SET_ITEMS: (state, items) => {
        items.forEach((item, i) => {
          if (item) {
            Vue.set(state.posts, i, item.data)
          }
        })
        state.postsLoading = false
      }
    },
    getters: {
      getPosts: state => state.posts,
      loading: state => state.postsLoading
    }
  })
}

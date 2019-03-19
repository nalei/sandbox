import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '../api/create-api'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      posts: [],     // Массив новостей Reddit
      loading: true  // Состояние закрузки
    },
    actions: {
      FETCH_POSTS: ({ commit }, subReddit) => {
        const url = 'r/' + subReddit + '/top.json?limit=30&count=30' // ToDo: Обрабатывать параметры
        api.get(url).then(response => {
          const items = response.data.data.children
          commit('SET_ITEMS', items)
        }).catch(error => console.error(error))
      }
    },
    mutations: {
      SET_ITEMS: (state, items) => {
        state.posts = items
        state.loading = false
      }
    },
    getters: {
      posts: state => state.posts,
      loading: state => state.loading
    }
  })
}

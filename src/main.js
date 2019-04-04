// Plugins
import './plugins/bootstrap'
import './plugins/fontawesome'
import './plugins/notifications'

import Vue from 'vue'
import App from './App'

import { sync } from 'vuex-router-sync'
import { createRouter } from './router'
import { createStore } from './store'
import { createI18n } from './i18n'


export function createApp() {
  const store = createStore()
  const router = createRouter()
  const i18n = createI18n()
  // 同步路由状态(route state)到 store
  sync(store, router)
  // 创建应用程序实例，将 router 和 store 注入
  const app = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  })
  // 暴露 app, router 和 store
  return { app, router, store }
}

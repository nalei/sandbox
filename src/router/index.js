import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

const Home = () => import('@/components/pages/Home')
const About = () => import('@/components/pages/About')
const Contact = () => import('@/components/pages/Contact')

Vue.use(Router)
Vue.use(Meta)

export function createRouter() {
  return new Router({
    linkActiveClass: 'open active',
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      }
    ]
  })
}

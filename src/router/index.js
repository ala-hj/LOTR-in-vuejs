import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import charPage from '../views/chars.vue'
import about from '../views/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/characters',
    name: 'charsView',
    component: charPage
  },
  {
    path: '/about',
    name: 'About',
    component: about
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

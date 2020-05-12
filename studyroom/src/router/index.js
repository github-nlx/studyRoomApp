import Vue from 'vue'
import VueRouter from 'vue-router'
import welcome from '../views/welcome'
const login = () => import('../views/login')

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'welcome',
    component: welcome
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: welcome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

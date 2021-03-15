import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  //  component: () => import('../views/Home.vue')
  },
  {
    path: '/Mypage',
    name: 'Mypage',
    component: () => import('../views/Mypage.vue')
  },
  {
    path: '/Class',
    name: 'Class',
    component: () => import('../class/Class.vue')
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../search/Search.vue')
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: () => import('../shopping/Shopping.vue')
  },
]

const router = new VueRouter({
 // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

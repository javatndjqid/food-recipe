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
    path: '/Class',
    name: 'Class',
    component: () => import('../views/Class.vue')
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: () => import('../views/Shopping.vue')
  },
  {
    path: '/Mypage',
    name: 'Mypage',
    component: () => import('../Mypage/Mypage.vue')
  },
  {
    path: '/MypageRecipy',
    name: 'MypageRecipy',
    component: () => import('../Mypage/MypageRecipy.vue')
  },
  {
    path: '/MypageClass',
    name: 'MypageClass',
    component: () => import('../Mypage/MypageClass.vue')
  },
  {
    path: '/MypageMarket',
    name: 'MypageMarket',
    component: () => import('../Mypage/MypageMarket.vue')
  },
]

const router = new VueRouter({
 // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

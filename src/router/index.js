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
    path: '/Search',
    name: 'Search',
    component: () => import('../search/Search.vue')
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: () => import('../shopping/Shopping.vue')
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
    path: '/SearchDetail',
    name: 'SearchDetail',
    component: () => import('../search/SearchDetail.vue'),
    props: true
  },
  {
    path: '/MypageRecipyDetail',
    name: 'MypageRecipyDetail',
    component: () => import('../Mypage/MypageRecipyDetail.vue'),
    props: true
  },

  {
    path: '/Lecture',
    name: 'Lecture',
    component: () => import('../lecture/Lecture.vue')
  },
  {
    path: '/LectureDetail/:id',
    name: 'LectureDetail',
    component: () => import('../lecture/LectureDetail.vue'),
    props: true,
  },
  {
    path: '/LecturePlay/:id',
    name: 'LecturePlay',
    component: () => import('../lecture/LecturePlay.vue'),
    props: true,
  }

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

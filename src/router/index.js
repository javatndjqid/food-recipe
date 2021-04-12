import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
Vue.use(VueRouter)

// https://router.vuejs.org/kr/guide/essentials/passing-props.html


const routes = [
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import('../mypage/Profile.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../search/Search.vue')
    //  component: () => import('../views/Home.vue')
  },
  // {
  //   path: '/Search',
  //   name: 'Search',
  //   component: () => import('../search/Search.vue')
  // },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: () => import('../shopping/Shopping.vue')
  },
  {
    path: '/Mypage',
    name: 'Mypage',
    component: () => import('../mypage/Mypage.vue')
  },
  {
    path: '/MypageRecipy',
    name: 'MypageRecipy',
    component: () => import('../mypage/MypageRecipy.vue')
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
    component: () => import('../mypage/MypageRecipyDetail.vue'),
    props: true
  },

  {
    path: '/Lecture',
    name: 'Lecture',
    component: () => import('../lecture/Lecture.vue')
  },
  {
    path: '/Lecture/Detail/:id',
    name: 'LectureDetail',
    component: () => import('../lecture/LectureDetail.vue'),
    props: castRouteParams,
  },
  {
    path: '/Lecture/Play/:id',
    name: 'LecturePlay',
    component: () => import('../lecture/LecturePlay.vue'),
    props: castRouteParams,
  },
  {
    path: '/Shopping/Cart',
    name: 'Cart',
    component: () => import('../shopping/Cart.vue'),
    props: true,
  },
  {
    path: '/Shopping/Manager',
    name: 'Manager',
    component: () => import('../shopping/Manager.vue'),
    props: true,
  },
  {
    path: '/Shopping/Lock',
    name: 'Lock',
    component: () => import('../shopping/Lock.vue'),
    props: true,
  },
  {
    path: '/Shopping/ProductManagement',
    name: 'ProductManagement',
    component: () => import('../shopping/ProductManagement.vue'),
    props: true,
  },
  {
    path: '/Shopping/OrderList',
    name: 'OrderList',
    component: () => import('../shopping/OrderList.vue'),
    props: true,
  },
  {
    path: '/Shopping/ProductDetail',
    name: 'ProductDetail',
    component: () => import('../shopping/ProductDetail.vue'),
    props: true,
  }

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function castRouteParams(route){
  return {
    id: Number(route.params.id),
  };
}

export default router

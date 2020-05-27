import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/downloadapp',
    name: 'DownloadApp',
    component: () => import('../views/DownloadApp.vue')
  },
  {
    path: '/postdetail/:id',
    name: 'PostDetail',
    component: () => import('../views/PostDetail.vue')
  },
  {
    path: '/login_register',
    name: 'LoginRegister',
    component: () => import('../views/user/LoginRegister.vue')
  },
  {
    path: '/publish',
    name: 'PostPublish',
    component: () => import('../views/posts/PostPublish.vue')
  },
    {
        path: '/user/settings/:id',
        name: 'UserSettings',
        component: () => import('../views/user/Settings.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   if(){

//   }

// })

export default router

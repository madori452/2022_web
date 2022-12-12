import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue')
  },

  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 路由點擊active
  linkActiveClass: 'active',
  // 若為/路由畫面固定在top 0
  scrollBehavior (to) {
    if (to.fullPath.match('/')) {
      return {
        top: 0
      }
    }
  }

})

export default router

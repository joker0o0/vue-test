import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/test',
    component: () => import('@/views/test')
  }
]

const router = new Router({
  routes
})

export default router
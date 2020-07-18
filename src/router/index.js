import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [

  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      showHeader: true,
      curTitle: '首页',
      showFooter: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      showHeader: true,
      curTitle: '登录/注册',
      showFooter: false
    }
  },
  {
    path: '/person',
    name: 'Person',
    component: () => import('../views/Person.vue'),
    meta: {
      showHeader: true,
      curTitle: '个人中心',
      showFooter: true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
    meta: {
      showHeader: true,
      curTitle: '订单',
      showFooter: true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue'),
    meta: {
      showHeader: false,
      showFooter: true
    }
  },
  {
    path: '/*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      showHeader: false,
      curTitle: '找不到页面',
      showFooter: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

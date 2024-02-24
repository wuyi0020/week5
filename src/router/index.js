import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/AllArtWorkView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/product',
    name: "product",
    component: ProductView
  },
  {
    path: '/editcoin',
    name: "editcoin",
    component: () => import('../views/EditCoinView.vue')
  },
  {
    path: '/author',
    name: "AuthorView",
    component: () => import('../views/AuthorView.vue')
  },
  {
    path: '/artwork/:id',
    name: "ArtWorkView",
    component: () => import('../views/ArtWorkView.vue')
  },
  {
    path:"/buycoin",
    name: "BuyCoinView",
    component: () => import('../views/BuyCoinView.vue')
  },
  {
    path:"/cart",
    name: "CartView",
    component: () => import('../views/CartView.vue')
  },
  // {
  //   path:"/test",
  //   name: "TestView",
  //   component: () => import('../views/testView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

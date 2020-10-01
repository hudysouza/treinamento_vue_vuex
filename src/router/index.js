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
    path: '/pessoa',
    name: 'Pessoa',
    component: () => import('@/views/pessoa/Pessoa')
  },
  {
    path: '/novapessoa',
    name: 'NovaPessoa',
    component: () => import('@/views/pessoa/Novapessoa')
  },
  {
    path: '/editarpessoa/:id',
    name: 'EditarPessoa',
    component: () => import('@/views/pessoa/EditarPessoa')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

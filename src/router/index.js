import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
//import Category from '@/views/Category.vue'
//import Cart from '@/views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path:'/categories',
    name:'Categories',
    component:CategoriesView
  },
  // {
  //   path:'/category/:id',
  //   name:'Category',
  //   component: Category,
  //   props:true
  // },
  // {
  //   path:'/cart',
  //   name:'Cart',
  //   component:Cart
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

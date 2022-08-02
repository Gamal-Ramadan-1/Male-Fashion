import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/blog',
    name: 'blog',
    component: blog
  },

  {
    path: '/Contact',
    name: 'contact',
    component: Contact
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

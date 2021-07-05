import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home/Home.vue'
import Cards from '../components/cards/Cards.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // route -> routes
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cards/:class',
      name: 'cards',
      component: Cards,
    },
  ],
})

export default router

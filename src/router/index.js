import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/createPlayer',
      name: 'createPlayer',
      component: () => import('../views/CreatePlayerView.vue')
    },
    {
      path: '/deletePlayer',
      name: 'deletePlayer',
      component: () => import('../views/DeletePlayerView.vue')
    },
    {
      path: '/attackManagement',
      name: 'attackManagement',
      component: () => import('../views/AttackManagement.vue')
    },
    {
      path: '/joinView',
      name: 'joinView',
      component: () => import('../views/JoinBattleView.vue')
    }
  ]
})

export default router

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
      path: '/joinView',
      name: 'joinView',
      component: () => import('../views/JoinBattleView.vue')
    },
    {
      path: '/playerInfo',
      name: 'playerInfo',
      component: () => import('../views/PlayerInfoView.vue')
    },
    {
      path: '/attackManagement',
      name: 'attackManagement',
      component: () => import('../views/AttackManagement.vue')
    },
    {
      path: '/createAttack',
      name: 'createAttack',
      component: () => import('../views/CreateAttackView.vue')
    },
    {
      path: '/sellAttack',
      name: 'sellAttack',
      component: () => import('../views/SellView.vue')
    },
    {
      path: '/buyAttack',
      name: 'buyAttack',
      component: () => import('../views/BuyView.vue')
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: () => import('../views/RankingManagementView.vue')
    }
    ,
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/GameView.vue')
    }
    ,
    {
      path: '/gameCreation',
      name: 'gameCreation',
      component: () => import('../views/GameCreationView.vue')
    }
    ,
    {
      path: '/gameAvailable',
      name: 'gameAvailable',
      component: () => import('../views/AvailableGamesView.vue')
    }
    ,
    {
      path: '/gameFinder',
      name: 'gameFinder',
      component: () => import('../views/GameFinderView.vue')
    }
    ,
    {
      path: '/gameRecord',
      name: 'gameRecord',
      component: () => import('../views/GameRecordView.vue')
    },
    {
      path: '/playerGameHistory',
      name: 'playerGameHistory',
      component: () => import('../views/PlayerGameHistoryView.vue')
    },
    {
      path: '/playerStatistics',
      name: 'playerStatistics',
      component: () => import('../views/PlayerStatisticsView.vue')
    },
    {
      path: '/gameLogs',
      name: 'gameLogs',
      playerStatisticsomponent: () => import('../views/GameLogsView.vue')
    },
    {
      path: '/gameReplay',
      name: 'gameReplay',
      component: () => import('../views/GameReplayView.vue')
    },
    {
      path: '/gameFinder',
      name: 'gameFinder',
      component: () => import('../views/GameFinderView.vue')
    }

  ]
})

export default router

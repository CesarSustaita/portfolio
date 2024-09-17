import { createRouter, createWebHistory } from 'vue-router'
import WorkView from '@/views/WorkView.vue'
import fallbackView from '@/views/fallbackView.vue'

const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'work',
      component: WorkView
    },
    {
      path: '/fallback',
      name: 'fallback',
      component: fallbackView
    }

  ]
})

export default router

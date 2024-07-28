import { createRouter, createWebHistory } from 'vue-router'
import WorkView from '../views/WorkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'work',
      component: WorkView
    },
    
  ]
})

export default router

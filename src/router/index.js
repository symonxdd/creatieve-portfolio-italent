import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue' // Your main App component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App, // Render the main App component for the root route
    },
  ],
})

export default router
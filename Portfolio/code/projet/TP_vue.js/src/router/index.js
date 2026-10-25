
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TodosView from '../views/TodosView.vue'
import TodoDetailView from '../views/TodoDetailView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodosView,
      meta: { requiresAuth: true },
    },
    {
      path: '/todos/:id',
      name: 'todo-detail',
      component: TodoDetailView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

router.beforeEach((to) => {
  const isConnected = sessionStorage.getItem('isConnected') === 'true'

  if (to.meta.requiresAuth && !isConnected) {
    return '/'
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView,
    },
    {
      path: '/login',
      name:'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),

    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: { requiresAuth: true },

    },
      {
      path: '/analysis',
      name: 'analysis',
      component: () => import('@/views/CreateAnalysisView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/analysis/:id',
      name: 'analysis',
      component: () => import('@/views/CreateAnalysisView.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to, from) => {
  const authStore = useAuthStore()
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !authStore.isLogged) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  }
})
export default router

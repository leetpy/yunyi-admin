import { createRouter, createWebHistory } from 'vue-router'
import { menus } from './menu'

const baseRouter = {
  path: '/',
  name: 'layout',
  component: () => import('@/view/layout/LayoutIndex.vue'),
  meta: {
  },
  children: [
    ...menus
  ]
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    baseRouter,
    {
      name: "login",
      path: "/login",
      component: () => import("@/view/login/UserLogin.vue")
    }
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("@/view/layout/LayoutIndex.vue")
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/view/login/UserLogin.vue")
    }
  ],
})

export default router

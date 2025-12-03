import type { RouteRecordRaw } from 'vue-router'

// 菜单里面的路由
export const menus: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/view/home/HomeIndex.vue'),
    meta: {
      title: '首页',
      icon: 'House',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      title: 'Dashboard',
      icon: 'Stopwatch',
    },
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('@/view/dashboard/main/MainDashboard.vue'),
        meta: {
          title: '主控台',
          icon: 'Orange',
        },
      },
      {
        path: 'workspace',
        name: 'workspace',
        component: () => import('@/view/dashboard/workspace/WorkspaceDashboard.vue'),
        meta: {
          title: '工作台',
          icon: 'Watermelon',
        },
      },
    ],
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'Operation',
    },
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/view/system/user/UserMnt.vue'),
        meta: {
          title: '用户管理',
          icon: 'User',
        },
      },
    ]
  },
]

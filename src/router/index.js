// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/LayoutTwo.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Blog.vue'),
      },
    ],
  },
  {
    path: '/test',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/test', name: 'Test', component: () => import('@/views/home.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/DefaultTwo.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home2.vue'),
      },
    ],
  },
  // {
  //   path: '/test',
  //   component: () => impor@/layouts/default/Default.vuevue'),
  //   children: [
  //     {
  //       path: '/test', name: 'Test', component: () => impor@/views/Home.vuevue'),
  //     },
  //   ],
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

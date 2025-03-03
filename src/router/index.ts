import { createRouter, createWebHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';

import * as PAGE_URL from '@/constants/page-url-constants';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: PAGE_URL.PAGE_URL_HOME
  },
  {
    path: '/layout',
    name: '/layout',
    component: () => import('@/pages/layout.vue'),
    children: [
      {
        path: PAGE_URL.PAGE_URL_HOME,
        name: PAGE_URL.PAGE_URL_HOME,
        meta: {
          title: 'home'
        },
        component: () => import('@/pages/home.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to) => {
  // 修改当前标签页的名称
  const title = to.meta.title;
  const titleNode = document.querySelector('head > title');
  if (title && titleNode) {
    titleNode.textContent = title.toString();
  }
});

export default router;

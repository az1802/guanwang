import { createRouter, createWebHistory } from "vue-router";

// 路由信息
const routes = [
  {
    path: "/",
    name: "index",
    component: () => import('./views/Home.vue'),
  },
  {
    path: "/product",
    name: "product",
    component: () => import('./views/Product.vue'),
  },
  {
    path: "/about",
    name: "about",
    component: () => import('./views/About.vue'),
  },
];

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

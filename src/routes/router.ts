import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./Main.vue") },
  { path: "/pricing", component: () => import("./Pricing.vue") },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

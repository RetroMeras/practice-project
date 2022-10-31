import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./Main.vue") },
  { path: "/create", component: () => import("./Create.vue") },
  { path: "/test", component: () => import("./Test.vue") },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

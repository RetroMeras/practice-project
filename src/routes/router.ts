import { createRouter, createWebHistory } from "vue-router";

// https://router.vuejs.org/guide/#javascript

const routes = [
  { path: "/", component: () => import("./Main.vue") },
  { path: "/create", component: () => import("./Create.vue") },
  { path: "/analyze", component: () => import("./Analyze.vue") },
  { path: "/draw", component: () => import("./Draw.vue") },
  { path: "/test", component: () => import("./Test.vue") },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

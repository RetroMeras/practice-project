import { createRouter, createWebHistory } from "vue-router";

// https://router.vuejs.org/guide/#javascript

const routes = [
  { path: "/", component: () => import("./Main.vue") },
  { path: "/draw", component: () => import("./Draw.vue") },
  { path: "/settings", component: () => import("./Settings.vue") },
  {
    path: "/lists/entities",
    component: () => import("./Lists/Entities.vue") },
  {
    path: "/lists/relations",
    component: () => import("./Lists/Relations.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

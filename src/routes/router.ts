import { createRouter, createWebHistory } from "vue-router";

// https://router.vuejs.org/guide/#javascript

const routes = [
  { path: "/", component: () => import("./Main.vue") },
  { path: "/draw", component: () => import("./Draw.vue") },
  { path: "/settings", component: () => import("./Settings.vue") },
  {
    path: "/list/participants",
    component: () => import("./Lists/Participant.vue"),
  },
  {
    path: "/list/units",
    component: () => import("./Lists/Unit.vue"),
  },
  {
    path: "/list/supplies",
    component: () => import("./Lists/Supply.vue"),
  },
  {
    path: "/list/resources",
    component: () => import("./Lists/Resource.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

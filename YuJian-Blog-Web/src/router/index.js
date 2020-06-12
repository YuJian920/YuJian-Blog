import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: () => import("@/views/About")
  },
  {
    path: "/Archive",
    name: "Archive",
    component: () => import("@/views/Archive")
  },
  {
    path: "/Article",
    name: "Article",
    component: () => import("@/views/Article")
  }
];

const router = new VueRouter({
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export default router;

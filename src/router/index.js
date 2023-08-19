import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/brand",
    name: "brand",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BrandView.vue"),
  },
  {
    path: "/register",
    name: "register",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

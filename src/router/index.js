import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

// function routeGuard(from, to, next) {
//   if (localStorage.getItem("authenticated") === true) {
//     next(); // allow to enter route
//   } else {
//     next("/"); // go to '/login';
//   }
// }

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/index",
    name: "index",
    // beforeEnter: routeGuard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/IndexView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

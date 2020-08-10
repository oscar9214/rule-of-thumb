import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/past-trials",
    name: "PastTrials",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DefaultPage.vue"),
    props: {
      title: 'Past trials'
    }
  },
  {
    path: "/how-it-works",
    name: "HowItWorks",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DefaultPage.vue"),
    props: {
      title: 'How it works'
    }
  },
  {
    path: "/login",
    name: "LogIn",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DefaultPage.vue"),
    props: {
      title: 'Log in'
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;

import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/name-extractor",
      name: "name-extractor",
      component: () => import("../views/NameExtractor.vue")
    },
    {
      path: "/taggart",
      name: "taggart",
      component: () => import("../views/Taggart.vue")
    }
  ]
});

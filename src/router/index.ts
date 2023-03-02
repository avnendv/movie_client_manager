import { nextTick } from "vue";
import { createRouter, createWebHistory, Router } from "vue-router";
import { DEFAULT_TITLE } from "../config/constants";
import routes from "./routes";
import i18n from "../i18n";

// configure router
const router: Router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

router.afterEach((to) => {
  nextTick(() => {
    document.title = i18n.global.t((to.meta.title || DEFAULT_TITLE) as string);
  });
});

export default router;

import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { DEFAULT_TITLE } from "../config/contants";
import routes from "./routes";
import i18n from "../i18n";

// configure router
const router = createRouter({
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

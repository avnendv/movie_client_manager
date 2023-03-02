import { RouteRecordRaw } from "vue-router";
import { NotFoundPage } from "../pages";

const routes: RouteRecordRaw[] = [
  {
    path: "/admin",
    component: () =>
      import(
        /* webpackChunkName: "admin-layout" */ "../layouts/MainLayout.vue"
      ),
    redirect: "admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        meta: { title: "dashboard-admin" },
        component: () =>
          import(
            /* webpackChunkName: "dashboard-page" */ "../pages/DashboardPage.vue"
          ),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found-page",
    meta: { title: "not-found-page" },
    component: NotFoundPage,
  },
];

export default routes;

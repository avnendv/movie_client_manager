import { RouteRecordRaw } from "vue-router";
import { NotFoundPage } from "@/pages";

const routes: RouteRecordRaw[] = [
  {
    path: "/admin",
    component: () =>
      import(
        /* webpackChunkName: "admin-layout" */ "@/layouts/MainLayout.vue"
      ),
    redirect: "admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        meta: { title: "dashboard-admin" },
        component: () =>
          import(
            /* webpackChunkName: "dashboard-page" */ "@/pages/DashboardPage.vue"
          ),
      },
      {
        path: "category",
        component: () =>
          import(
            /* webpackChunkName: "category-page" */ "@/layouts/EmptyLayout.vue"
          ),
        children: [
          {
            path: "",
            name: "category-manager",
            meta: { title: "category-manager" },
            component: () =>
              import(
                /* webpackChunkName: "category-page" */ "@/pages/category/CategoryListPage.vue"
              ),
          },
          {
            path: ":id",
            name: "category-detail",
            meta: { title: "category-detail" },
            component: () =>
              import(
                /* webpackChunkName: "category-page" */ "@/pages/category/CategoryDetailPage.vue"
              ),
          },
          {
            path: "create",
            name: "category-create",
            meta: { title: "category-create" },
            component: () =>
              import(
                /* webpackChunkName: "category-page" */ "@/pages/category/CategoryCreatePage.vue"
              ),
          },
          {
            path: "edit/:id",
            name: "category-edit",
            meta: { title: "category-edit" },
            component: () =>
              import(
                /* webpackChunkName: "category-page" */ "@/pages/category/CategoryEditPage.vue"
              ),
          },
        ],
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

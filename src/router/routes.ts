const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "admin-layout" */ "../layouts/MainLayout.vue"
      ),
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        meta: { title: "dashboard admin" },
        component: () =>
          import(
            /* webpackChunkName: "dashboard-page" */ "../pages/DashboardPage.vue"
          ),
      },
    ],
  },
];

export default routes;

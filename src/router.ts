import { createRouter, createWebHistory } from "vue-router";

import HomeAdminPage from "./pages/admin/HomeAdminPage.vue";
import productsAdminPage from "./pages/admin/productsAdminPage.vue";
import categoriesAdminPage from "./pages/admin/categoriesAdminPage.vue";
import usersAdminPage from "./pages/admin/usersAdminPage.vue";
import receiptsAdminPage from "./pages/admin/receiptsAdminPage.vue";

const routes = [
  {
    path: "/",
    name: "HomeAdmin",
    component: HomeAdminPage,
  },
  {
    path: "/products-admin",
    name: "ProductsAdmin",
    component: productsAdminPage,
  },
  {
    path: "/categories-admin",
    name: "CategoriesAdmin",
    component: categoriesAdminPage,
  },
  {
    path: "/users-admin",
    name: "UsersAdmin",
    component: usersAdminPage,
  },
  {
    path: "/receipts-admin",
    name: "ReceiptsAdmin",
    component: receiptsAdminPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
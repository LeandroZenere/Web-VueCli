import { createRouter, createWebHistory } from "vue-router";
import PaginaPrincipal from "../views/PaginaPrincipal.vue";
import PruebaAboutComponente from "../views/PruebaAboutComponente.vue";
const routes = [
  {
    path: "/",
    name: "paginaPrincipal",
    component: PaginaPrincipal,
  },
  {
    path: "/pruebaAbout",
    name: "PruebaAbout",
    component: PruebaAboutComponente,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import OrdersView from '../views/OrdersView.vue'
import StatisticsView from "../views/StatisticsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: OrdersView,
    },
    {
      path: "/statistics",
      name: "statistics",
      component: StatisticsView,
    },
  ],
});

export default router;

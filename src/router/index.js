import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import OrdersPage from '../views/OrdersPage.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage, exact: true },
  { path: '/orders', name: 'orders', component: OrdersPage }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
import HomeView from "@/views/HomeView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/product/:slug", name: "product", component: ProductDetailView },
  ],
});

export default router;

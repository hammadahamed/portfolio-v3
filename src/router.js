import { createRouter, createWebHistory } from "vue-router";
import Home from "./modules/home/Home.vue";
import ChatGPTPrivacyPolicy from "./modules/products/chatgpt-pro/PrivacyPolicy.vue";

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
    meta: {
      title: "Portfolio",
    },
  },
  {
    path: "/chatgpt-pro/privacy-policy",
    name: "Chat GPT Privacy Policy",
    component: ChatGPTPrivacyPolicy,
    meta: {
      title: "Portfolio",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;

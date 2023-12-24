//创建路由器并暴露出去
import { createRouter, createWebHistory } from "vue-router";

//引入组件
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import News from "@/components/News.vue";
//创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/news",
      component: News,
    },
  ],
});

export default router;

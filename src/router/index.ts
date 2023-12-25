//创建路由器并暴露出去
import { createRouter, createWebHistory } from "vue-router";

//引入组件
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import News from "@/views/News.vue";
import Detail from "@/views/Detail.vue";
//创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/news",
      name: "news",
      component: News,
      children: [
        {
          path: "detail",
          name: "detail",
          component: Detail,
        },
      ],
    },
  ],
});

export default router;

//从vue模块引入createApp。createApp是用来创建Vue应用实例
import { createApp } from "vue";
//导入App.vue
import App from "./App.vue";
import router from "./router";

//挂载App.vue在#app，#app在index文件
createApp(App).mount("#app");

//使用路由器,并挂载整个应用到app
App.use(router).mount("#app");

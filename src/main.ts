//从vue模块引入createApp。createApp是用来创建Vue应用实例
import { createApp } from "vue";
//导入App.vue
import App from "./App.vue";

//挂载App.vue在#app，#app在index文件
createApp(App).mount("#app");

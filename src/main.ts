//从vue模块引入createApp。createApp是用来创建Vue应用实例
import { createApp } from "vue";
//导入App.vue
import App from "./App.vue";
import router from "./router";

import { createPinia } from "pinia";

//导入emitter
import emitter from "./utils/emitter";

//创建应用
const app = createApp(App);

//创建pinia
const Pinia = createPinia();

//挂载路由
app.use(router);

//挂载pinia
app.use(Pinia);

//挂载mitt
app.config.globalProperties.emitter = emitter;

console.log(emitter);

//挂载应用
app.mount("#app");

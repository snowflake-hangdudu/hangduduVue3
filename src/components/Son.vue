<template>
  <div class="son">
    <h1>子组件</h1>
    <h1>玩具是{{ toy }}</h1>
    <h1>从父组件拿的车是{{ car }}</h1>
    <button @click="go()">点我触发事件</button>
  </div>
</template>

<script lang="ts" setup name="Son">
import { ref } from "vue";
let toy = ref("奥特曼");

let go = () => {
  console.log("son");
  props.sendToy("玩具车");
};

let props = defineProps(["car", "sendToy"]);
</script>

<style scoped>
div {
  background-color: aqua;
}
</style>

<template>
  <div class="parent">
    <h1>父组件</h1>
    <h1>车是{{ car }}</h1>
    <Son :car="car" :sendToy="getToy"></Son>
  </div>
</template>

<script lang="ts" setup name="Parent">
import { ref } from "vue";
import Son from "./Son.vue";
let car = ref("奔驰");
let getToy = (value: string) => {
  console.log("我拿到了玩具", value);
  car.value = value;
};
</script>

<style scoped></style>

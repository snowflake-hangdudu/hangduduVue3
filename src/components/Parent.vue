<template>
  <div class="parent">
    <h1>我是父组件</h1>
  </div>
</template>

<script lang="ts" setup name="Parent">
import { ref } from "vue";
import Son from "./Son.vue";
import mockjs from "mockjs";

let mockjs = reactive(mockjs);
</script>

<style scoped>
.parent {
  background-color: #bfa;
  padding: 10px;
  border-radius: 10px;
}
.container {
  display: flex;
  justify-content: space-between;
}

.son {
  width: 30%;
}
</style>

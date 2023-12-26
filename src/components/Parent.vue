<template>
  <div class="parent">
    <h1>我是父组件</h1>
    <div class="container">
      <div class="son"><Son> 1 </Son></div>
      <div class="son"><Son> 2 </Son></div>
      <div class="son"><Son> 3 </Son></div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Parent">
import { ref } from "vue";
import Son from "./Son.vue";
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

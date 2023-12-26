<template>
  <div class="app">
    <Parent />
  </div>
</template>

<script lang="ts" setup name="App">
import Parent from "@/components/Parent.vue";
import { ref, reactive } from "vue";
</script>

<style scoped>
.app {
  background-color: #15b5e6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="app"><Parent /></div>
</template>

<script lang="ts" setup name="App">
import Parent from "@/components/Parent.vue";
</script>

<style scoped>
.app {
  background-color: #bfa;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="son">
    <h1>son</h1>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup name="Son">
import { ref } from "vue";
</script>

<style scoped>
div {
  background-color: aqua;
}
</style>

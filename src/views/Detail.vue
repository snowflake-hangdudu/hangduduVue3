<template>
  <div>
    <h1>id{{ route.query.id }}</h1>
    <h1>标题{{ route.query.title }}</h1>
    <h1>内容{{ route.query.content }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route, "route");
console.log("");
</script>

<style scoped></style>

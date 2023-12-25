<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
let useRoute = useRouter();
onMounted(() => {
  setTimeout(() => {
    console.log("home");
    useRoute.push("/about");
  }, 3000);
});
</script>

<style scoped></style>

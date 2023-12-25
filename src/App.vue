<template>
  <div class="app">
    <!-- <div class="sum">
      <Sum></Sum>
      <LoveTalk></LoveTalk>
    </div> -->

    <div class="nav">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
      <RouterLink to="/about" active-class="active">关于</RouterLink>
    </div>
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from "vue-router";
import Sum from "./components/Sum.vue";
import LoveTalk from "./components/LoveTalk.vue";
</script>

<style scoped>
.app {
  background-color: #bfa;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.sum {
  padding: 10px;
  background-color: aqua;
}

.nav {
  display: flex;
  justify-content: space-around;
}

.nav a {
  margin-right: 10px;
  text-decoration: none;
}

.nav a:active {
  color: #bfa;
}

.main-content {
  padding: 10px;
  border-radius: 10px;
  background-color: #eee;
  margin-top: 10px;
  min-height: 500px;
  min-width: 500px;
  display: flex;
}

.active {
  color: yellow;
}
</style>

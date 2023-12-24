<template>
  <div class="app">
    hangdudu
    <div class="nav">
      <a href="">首页</a><a href="">新闻</a><a href="">关于</a>
    </div>
    <div class="main-content">负责展示</div>
  </div>
</template>

<script lang="ts" setup name="App"></script>

<style scoped>
.app {
  background-color: #bfa;
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
  color: bfa;
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
</style>

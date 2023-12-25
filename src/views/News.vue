<template>
  <div>
    <h1>News</h1>
    <!-- 导航区 -->
    <div class="news-nav">
      <RouterLink
        :to="{
          name: 'detail',
          query: {
            id: item.id,
            title: item.title,
            content: item.content,
          },
        }"
        v-for="item in newsList"
        active-class="active"
        :key="item.id"
        >{{ item.title }}
      </RouterLink>
    </div>

    <!-- 展示区 -->
    <div class="news-content">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterView, RouterLink, useRouter } from "vue-router";
import { reactive } from "vue";

let newsList = reactive([
  { id: "001", title: "新闻001的标题", content: "新闻001的内容" },
  { id: "002", title: "新闻002的标题", content: "新闻002的内容" },
  { id: "003", title: "新闻003的标题", content: "新闻003的内容" },
  { id: "004", title: "新闻004的标题", content: "新闻004的内容" },
]);

let route = useRouter();
</script>

<style scoped>
.news-nav {
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.news-content {
  padding: 10px;
  border-radius: 10px;
  background-color: #bfa;
  margin-top: 10px;
  min-height: 400px;
  min-width: 500px;
  display: flex;
}
</style>

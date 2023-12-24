<template>
  <div class="person">
    <h1>hangdudu</h1>
    <h2>当前求和为{{ sum }}</h2>
    <button @click="add">点击加1</button>
    <hr />
    <h2>下方展示狗狗图片</h2>
    <img :src="item" v-for="item in dogList" :key="item" />
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from "vue";
import axios from "axios";
let sum = ref(0);
let dogList = reactive([
  "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg",
]);

//https://dog.ceo/api/breeds/image/random

function add() {
  sum.value++;
}

function getDog() {
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      dogList.push(res.data.message);
    })
    .catch((err) => {
      alert(err);
    });
}
</script>

<style scoped>
.person {
  background-color: #bfa;
  padding: 10px;
  border-radius: 10px;
}

img {
  width: 100px;
  margin: 10px;
}
</style>

<template>
  <div class="talk">
    <button @click="get">获取一句土味情话</button>
    <ul>
      <li v-for="item in talkList" :key="item.id">{{ item.msg }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
import { reactive } from "vue";
import useLoveTalkStore from "@/store/loveTalk";
import axios from "axios";

let loveTalkStore = useLoveTalkStore();
console.log(loveTalkStore);

let talkList = loveTalkStore.loveTalkList;

let get = loveTalkStore.getTalkList;
</script>

<style scoped></style>

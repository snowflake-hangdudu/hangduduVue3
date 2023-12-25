<template>
  <div>
    <h1>当前求和为{{ countStore.sum }}</h1>
    <h1>school:{{ countStore.school }}</h1>

    <h1>address:{{ countStore.address }}</h1>

    <button @click="add(10)">点我加1</button>
    <button @click="cut">点我减1</button>
  </div>
</template>

<script lang="ts" setup name="Sum">
import { ref } from "vue";
import useCountStore from "@/store/count";
import { storeToRefs } from "pinia";

let countStore = useCountStore();
countStore.$subscribe((mutation, state) => {
  console.log("countStore", state);
  console.log("countstore里的值发生了改变");
});
let info = storeToRefs(useCountStore());
console.log(info);
console.log(info.sum.value);

console.log(useCountStore());

console.log("");
// let add = () => {
//   countStore.$patch({
//     sum: 100,
//     address: "beijing",
//     school: "beijing",
//   });
// };

let add = countStore.add;

let cut = () => {};
</script>

<style scoped></style>

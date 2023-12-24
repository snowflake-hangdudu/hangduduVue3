<template>
  <div class="person">
    <h1>姓: <input type="text" v-model="firstname" /></h1>
    <h1>名: <input type="text" v-model="lastname" /></h1>
    <h1>姓名: <input type="text" v-model="fullname" /></h1>
    <h2>{{ person.name }}</h2>
    <h2>{{ person.age }}</h2>
    <h3>{{ name }}</h3>
    <h3>{{ age }}</h3>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <h1>{{ info.brand }}</h1>
    <h1>{{ info.price }}</h1>

    <button @click="changebrand()">修改品牌</button>
    <button @click="changePrice()">修改价格</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive, toRefs, computed } from "vue";
let firstname = ref("zhang");
let lastname = ref("san");
let person = reactive({ name: "张三", age: 18 });
let { name, age } = toRefs(person);

let info = ref({ brand: "奔驰", price: 100 });

let changebrand = () => {
  info.value.brand = "法拉利";
};

let changePrice = () => {
  info.value.price = 200;
};

let changeName = () => {
  person.name = person.name + "1";
};

let changeAge = () => {
  person.age = person.age + 1;
};

let fullname = computed(() => {
  return firstname.value + " " + lastname.value;
});

console.log(name, "name");
console.log(age, "age");
</script>

<style scoped>
.person {
  background-color: #bfa;
  padding: 10px;
  border-radius: 10px;
}
</style>

import { defineStore } from "pinia";

const usesumStore = defineStore("sum", {
  state: () => ({
    sum: 0,
    school: "shangguigu",
    address: "shenzhen",
  }),
  actions: {
    add(value: number) {
      this.sum += value;
      this.school = "changeSchool";
      this.address = "changeAddress";
    },
  },
});

export default usesumStore;

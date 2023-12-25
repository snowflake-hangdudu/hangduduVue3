import { defineStore } from "pinia";
import axios from "axios";

const useLoveTalkStore = defineStore({
  id: "loveTalk",
  state: () => ({
    loveTalkList: [
      {
        id: "001",
        msg: "xxx1",
      },
      {
        id: "002",
        msg: "xxx2",
      },
      {
        id: "003",
        msg: "xxx3",
      },
    ],
  }),
  actions: {
    getTalkList() {
      axios
        .get("https://api.uomg.com/api/rand.qinghua?format=json")
        .then((res) => {
          this.loveTalkList.push({ id: "001", msg: res.data.content });
          console.log(res.data.content);
        });
    },
  },
});

export default useLoveTalkStore;

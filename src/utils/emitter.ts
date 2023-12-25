//引入emit
import mitt from "mitt";

//调用mitt得到emitter,emitter能绑定时间，触发事件
const emitter = mitt();

//绑定事件
emitter.on("test", (data) => {
  console.log(data);
});

emitter.on("test1", (data) => {
  console.log(data);
});

//暴露emitter
export default emitter;

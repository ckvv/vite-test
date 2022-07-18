import { Message } from "element-ui";

export default {
  install(Vue) {
    Vue.prototype.$message = Message;
  },
};

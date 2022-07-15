import { MessageBox, Message, Checkbox } from "element-ui";

export default {
  install(Vue) {
    Vue.prototype.$ELEMENT = { size: "small" };

    Vue.use(Checkbox);
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$message = Message;
  },
};

import Vue from "vue";
import App from "./Index.vue";
import pluginElements from "@/plugins/element.js";
Vue.use(pluginElements);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

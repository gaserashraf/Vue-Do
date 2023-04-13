import Vue from "vue";
import App from "./App.vue";
import { todoStore } from "./store/todoStore";
Vue.config.productionTip = false;

new Vue({
  store: todoStore,
  render: (h) => h(App),
}).$mount("#app");

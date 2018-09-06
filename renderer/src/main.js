import Vue from "vue";
import VueElectron from 'vue-electron';
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bulma";
import "@/fontawesome";
console.log(process)

Vue.use(VueElectron);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

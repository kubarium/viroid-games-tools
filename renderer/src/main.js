import Vue from "vue";
import VueElectron from "vue-electron";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import vuetify from "@/plugins/vuetify"; // path to vuetify export

/* Vue.use(Vuetify, {
  iconfont: "fa"
}); */

Vue.use(VueElectron);
Vue.config.productionTip = false;
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

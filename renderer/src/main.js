import Vue from "vue";
import VueElectron from "vue-electron";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/css/index.css';
import "@/fontawesome";

Vue.use(Tooltip);
Vue.use(VueElectron);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

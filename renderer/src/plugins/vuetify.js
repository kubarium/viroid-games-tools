import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
//import "@/fontawesome";

Vue.use(Vuetify);

const opts = {
  iconfont: "fa",
  theme: {
    options: {
      customProperties: true
    }
  }
};

export default new Vuetify(opts);

import Vue from "vue";
import Vuex from "vuex";
import nameExtractor from "./modules/name-extractor";
import taggart from "./modules/taggart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    nameExtractor,
    taggart
  }
});

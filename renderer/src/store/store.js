import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import nameExtractor from "./name-extractor";

let store = Object.assign({
  state: {},
  getters:{},
  mutations: {},
  actions: {}
}, nameExtractor)

export default new Vuex.Store(store)

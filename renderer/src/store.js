import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    fucksake(context, mikik) {
      console.log("sikik", mikik)
    }
  }
})

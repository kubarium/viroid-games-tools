const state = {
  tag: {
    id: "tavern",
    exists: false
  }
};
const getters = {};
const actions = {};
const mutations = {
  updateTaggart(state, id) {
    state.tag.id = id;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

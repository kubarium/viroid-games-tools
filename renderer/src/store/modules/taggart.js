import db from "@/data/firebase.js";

const tags = db.collection("tags");

const state = {
  query: {
    tag: "tavern",
    exists: false
  },
  tags: []
};
const getters = {};
const actions = {
  queryTag({ state }, tag) {
    tags
      .where("tag", "==", state.query.tag.toLowerCase())
      .get()
      .then(querySnapshot => {
        state.query.exists = querySnapshot.empty;
        console.log(querySnapshot);
      });
  },
  getTags({ state }, initial) {
    tags.get().then(querySnapshot => {
      state.tags = querySnapshot.docs;
      console.log(state.tags);
      /* 
        let tags;
        querySnapshot.forEach(doc => {
          tags.push()
          console.log(doc);
        }); */
    });
  }
};
const mutations = {
  updateTaggart(state, tag) {
    state.query.tag = tag;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

import db from "@/data/firebase.js";

const tags = db.collection("tags");

const state = {
  query: {
    tag: "tavern",
    exists: false,
    insertable: false,
    removable: false,
    updating: false,
    status: "Submit to check"
  },
  tags: []
};
const getters = {};
const actions = {
  queryTag({ state, commit }) {
    if (state.query.tag == "") return;
    tags
      .where("tag", "==", state.query.tag.toLowerCase())
      .get()
      .then(querySnapshot => {
        commit("updateTaggart", {
          exists: !querySnapshot.empty,
          insertable: querySnapshot.empty,
          removable: !querySnapshot.empty,
          updating: false,
          status: !querySnapshot.empty ? "It exists" : "You can insert it"
        });

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
  },
  insertTag({ state }) {
    tags.doc().set({ tag: state.query.tag, startsWith: state.query.tag.toLowerCase()[0] });
  }
};
const mutations = {
  updateTaggart(state, payload) {
    state.query = Object.assign({}, state.query, payload);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

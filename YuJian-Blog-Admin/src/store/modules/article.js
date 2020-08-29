import { getArticle } from "@/api/article";

const state = {
  article: []
};

const mutations = {
  SET_ARTICLE: (state, article) => {
    state.article = article;
  }
};

// get Article
const actions = {
  getArticle({ commit }) {
    return new Promise((resolve, reject) => {
      getArticle()
        .then(response => {
          if (response.error) {
            reject(response.errorMsg);
          }

          commit("SET_ARTICLE", response.data);
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

module.exports = {
  namespaced: true,
  state,
  mutations,
  actions
};

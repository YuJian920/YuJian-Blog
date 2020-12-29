import Vue from "vue";
import Vuex from "vuex";
import { getArticle } from "@/api/article.js";

Vue.use(Vuex);

const state = {
  Article: [],
};

const mutations = {
  SET_ARTICLE: (state, Article) => {
    state.Article = Article;
  },
};

const actions = {
  fetchArticle({ commit }) {
    return new Promise((resolve, reject) => {
      getArticle()
        .then((response) => {
          if (response.error) {
            reject(response.error);
          }

          commit("SET_ARTICLE", response.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});

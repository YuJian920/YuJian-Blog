import Vue from "vue";
import Vuex from "vuex";
import { login } from "@/api/user";
import { getArticle } from "@/api/user";

Vue.use(Vuex);

const state = {
  Token: "",
  Article: [],
};

const mutations = {
  SET_TOKEN: (state, Token) => {
    state.Token = Token;
  },
  SET_ARTICLE: (state, Article) => {
    state.Article = Article;
  },
};

const actions = {
  login({ commit }) {
    const username = "Ghost";
    const password = "4b18888d253715d62093683bd206dfda";
    return new Promise((resolve, reject) => {
      login({ username: username, password: password })
        .then((response) => {
          const { data } = response;
          commit("SET_TOKEN", data.token);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  feactArticle({ commit }) {
    return new Promise((resolve, reject) => {
      getArticle()
        .than((response) => {
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

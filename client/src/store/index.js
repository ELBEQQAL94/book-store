import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// services
import getBooks from '@/services/books';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    count: 0,
    loading: false,
    drawer: false,
    error: {},
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.books = books;
    },
    LOADING(state) {
      state.loading = !!state.loading;
    },
    ERRORS(state, error) {
      state.error = error;
    },
    SET_COUNT(state, books) {
      state.count = books.length;
    },
    SET_DRAWER(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    loadBooks({ commit }) {
      getBooks(commit);
    },
    addBook({ commit }, book) {
      commit('LOADING');
      axios
        .post(`${process.env.VUE_APP_HOST_API}/books`, book)
        .then(() => {
          commit('ADD_BOOK_SUCCESS');
          commit('LOADING');
        })
        .catch((err) => {
          commit('ERROR', err.data);
        });
    },
    toggleDrawer({ commit }) {
      commit('SET_DRAWER');
    },
  },
  modules: {
  },
});

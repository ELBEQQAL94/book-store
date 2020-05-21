import Vue from 'vue';
import Vuex from 'vuex';

// services
import Books from '@/services/books';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    count: 0,
    loading: false,
    drawer: false,
    success: false,
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
    ADD_BOOK_TO_STATE(state, book) {
      state.books.unshift(book);
      state.count += 1;
    },
    ADD_BOOK_SUCCESS(state) {
      state.success = true;
    },
    DELETE_BOOK_FROM_STATE(state, id) {
      state.books.filter((book) => book.id !== id);
    },
  },
  actions: {
    loadBooks({ commit }) {
      const books = new Books(commit);
      books.get();
    },
    addBook({ commit }, book) {
      const books = new Books(commit, book);
      books.post();
    },
    deleteBook({ commit }, id) {
      const book = this.state.books.find((b) => b.id === id);
      const books = new Books(commit, book);
      books.delete();
    },
    toggleDrawer({ commit }) {
      commit('SET_DRAWER');
    },
  },
});

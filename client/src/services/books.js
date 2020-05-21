import axios from 'axios';

class Books {
  constructor(commit, book) {
    this.commit = commit;
    this.book = book;
  }

  get() {
    this.commit('LOADING');
    axios
      .get(`${process.env.VUE_APP_HOST_API}/books`)
      .then((res) => {
        const books = res.data.data;
        this.commit('SET_BOOKS', books);
        this.commit('SET_COUNT', books);
        this.commit('LOADING');
      })
      .catch((err) => {
        this.commit('ERROR', err.data);
      });
  }

  getOneResource() {
    this.commit('LOADING');
    axios
      .get(`${process.env.VUE_APP_HOST_API}/book/${this.book.id}`)
      .then((res) => {
        const book = res.data.data;
        this.commit('SET_BOOK', book);
        this.commit('LOADING');
      })
      .catch((err) => {
        this.commit('ERROR', err.data);
      });
  }

  post() {
    this.commit('LOADING');
    axios
      .post(`${process.env.VUE_APP_HOST_API}/book`, this.book)
      .then(() => {
        this.commit('ADD_BOOK_TO_STATE', this.book);
        this.commit('ADD_BOOK_SUCCESS');
        this.commit('LOADING');
      })
      .catch((err) => {
        this.commit('ERROR', err.data);
      });
  }

  put() {
    this.commit('LOADING');
    axios
      .put(`${process.env.VUE_APP_HOST_API}/book`, this.book)
      .then(() => {
        this.commit('ADD_BOOK_TO_STATE', this.book);
        this.commit('ADD_BOOK_SUCCESS');
        this.commit('LOADING');
      })
      .catch((err) => {
        this.commit('ERROR', err.data);
      });
  }

  delete() {
    this.commit('LOADING');
    this.commit('DELETE_BOOK_FROM_STATE', this.book.id);
    axios
      .delete(`${process.env.VUE_APP_HOST_API}/book/${this.book.id}`)
      .then(() => {
        this.commit('LOADING');
      })
      .catch((err) => {
        this.commit('ERROR', err.data);
      });
  }
}

export default Books;

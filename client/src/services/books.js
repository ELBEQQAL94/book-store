import axios from 'axios';

// GET ALL BOOKS FROM THE SERVER
const getBooks = (commit) => {
  commit('LOADING');
  axios
    .get(`${process.env.VUE_APP_HOST_API}/books`)
    .then((res) => {
      const books = res.data.data;
      commit('SET_BOOKS', books);
      commit('SET_COUNT', books);
      commit('LOADING');
    })
    .catch((err) => {
      commit('ERROR', err.data);
    });
};

export default getBooks;

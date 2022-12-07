import { createStore } from 'vuex';

import booksModule from './modules/books/index.js';

const store = createStore({
  modules: {
    books: booksModule,
  },
  state() {
    return {
      bookId: new Date()
    }
  },
  getters: {
    bookId(state) {
      return state.bookId;
    }
  }
});

export default store;
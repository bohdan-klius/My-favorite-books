export default {
  registerBook(state, payload) {
    state.books.push(payload);
  },
  editBook(state, payload) {
    state.books.forEach(book => {
      if(book.id == payload.id) {
        book = payload;
      }
    })
  },
  setBooks(state, payload) {
    state.books = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};
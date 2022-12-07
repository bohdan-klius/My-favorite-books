export default {
  async registerBook(context, data) {
    const bookId = context.rootGetters.bookId;
    const bookData = {
      nameOfBook: data.bookName,
      theAuthorOfTheBook: data.authorName,
      description: data.desc,
      status: data.status
    };

    const response = await fetch(
      `https://my-favorite-books-31ec3-default-rtdb.europe-west1.firebasedatabase.app/books/${bookId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(bookData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerBook', {
      ...bookData,
      id: bookId
    });
  },
  // async editBook(context) {
  //   const response = await fetch(
  //     `https://my-favorite-books-31ec3-default-rtdb.europe-west1.firebasedatabase.app/books.json`, {
  //       method: "POST",
  //       body: JSON.stringify(editedBook)
  //     }
  //   );
  //   const responseData = await response.json();
  //   const editedBook = responseData.data.attributes;
  //   console.log(editedBook, 'Edited BOOOK?');

  //     // const responseData = await response.json();

  //     if (!response.ok) {
  //       // error ...
  //     }

  //   context.commit('editBook', {
  //     ...editedBook,
  //   });
  // },
  async loadBooks(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://my-favorite-books-31ec3-default-rtdb.europe-west1.firebasedatabase.app/books.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const books = [];

    for (const key in responseData) {
      const book = {
        id: key,
        nameOfBook: responseData[key].nameOfBook,
        theAuthorOfTheBook: responseData[key].theAuthorOfTheBook,
        description: responseData[key].description,
        status: responseData[key].status
      };
      books.push(book);
    }

    context.commit('setBooks', books);
    context.commit('setFetchTimestamp');
  }
};

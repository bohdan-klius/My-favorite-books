<template>
  <div>
    <section>
      <base-card>
      <h2>{{ selectedBook.nameOfBook }}</h2>
      <h3>{{ selectedBook.theAuthorOfTheBook }}</h3>
      <base-button>{{ this.selectedBook.status }}</base-button>
      </base-card>
    </section>
    <section>
      <base-card>
        <p>{{ description }}</p>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-button link :to="bookEditLink">Edit</base-button>
        <base-button>Delete</base-button>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedBook: null,
    };
  },
  computed: {
    bookEditLink() {
      return '/edit/' + this.id;
    },
    fullName() {
      return this.selectedBook.nameOfBook + ' ' + this.selectedBook.theAuthorOfTheBook;
    },
    status() {
      return this.selectedBook.status;
    },
    description() {
      return this.selectedBook.description;
    },
  },
  created() {
    this.selectedBook = this.$store.getters['books/books'].find(
      (book) => book.id === this.id
    );
  },
};
</script>
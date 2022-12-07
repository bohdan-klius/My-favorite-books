<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
    </base-dialog>
    <section>
      <book-filter @change-filter="setFilters"></book-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadBooks(true)">Refresh</base-button>
          <base-button v-if="!isLoading" link to="/addbook">Add Book</base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasBooks">
          <book-item
            v-for="book in filteredBooks"
            :key="book.id"
            :id="book.id"
            :name-of-book="book.nameOfBook"
            :the-author-of-the-book="book.theAuthorOfTheBook"
            :description="book.description"
            :status="book.status"
          ></book-item>
        </ul>
        <h3 v-else>No books found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import BookItem from '../../components/books/BookItem.vue';
import BookFilter from '../../components/books/BookFilter.vue';

export default {
  components: {
    BookItem,
    BookFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        alreadyRead: true,
        planningToRead: true,
        notRead: true,
      },
    };
  },
  computed: {
    filteredBooks() {
      const books = this.$store.getters['books/books'];
      return books.filter((book) => {
        if (this.activeFilters.alreadyRead && book.status.includes('Already read')) {
          return true;
        }
        if (this.activeFilters.planningToRead && book.status.includes('Planning to read')) {
          return true;
        }
        if (this.activeFilters.notRead && book.status.includes('Not read')) {
          return true;
        }
        return false;
      });
    },
    hasBooks() {
      return !this.isLoading && this.$store.getters['books/hasBooks'];
    },
  },
  created() {
    this.loadBooks();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadBooks(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('books/loadBooks', {forceRefresh: refresh});
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
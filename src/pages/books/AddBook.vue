<template>
  <div>
    <section>
      <base-card>
        <h2>Book addition form</h2>
        <book-form @save-data="saveData"></book-form>
      </base-card>  
    </section>
  </div>
</template>

<script>
import BookForm from '../../components/books/BookForm.vue';

export default {
  components: { 
    BookForm 
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('books/registerBook', data);
      this.$router.replace('/books');
    }
  }
}
</script>

<template>
  <div>
    <section>
      <base-card>
        <h2>Book addition form</h2>
        <edit-book-form @save-data="saveData" :id="this.id"></edit-book-form>
      </base-card>  
    </section>
  </div>
</template>

<script>
import EditBookForm from '../../components/books/EditBookForm.vue';

export default {
  props: ['id'],
  components: { 
    EditBookForm 
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('books/editBook', data);
      this.$router.replace('/books');
    }
  }
}
</script>
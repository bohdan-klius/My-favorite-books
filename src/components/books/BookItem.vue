<template>
  <li>
    <h3>{{ nameOfBook }}</h3>
    <h4>{{theAuthorOfTheBook}}</h4>
    <br>
    <div>
      <h4>{{description}}</h4>
    </div>
    <div class="actions">
      <div class="status">
        <p>{{status}}</p>
      </div>
      <base-button link :to="bookDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'nameOfBook', 'theAuthorOfTheBook', 'description', 'status'],
  computed: {
    bookDetailsLink() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: space-between;
  height: max-content;
}

.status {
  text-decoration: none;
  padding: 0 1.5rem;
  font: inherit;
  background-color: red;
  border: 1px solid red;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin: 0;
  display: inline-block;
}
</style>
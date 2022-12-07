<template>
  <base-card>
    <h2>Find Your Book</h2>
    <div>
      <span class="filter-option">
        <input type="checkbox" id="alreadyRead" checked @change="setFilter" />
        <label for="alreadyRead">Already read</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="planningToRead" checked @change="setFilter" />
        <label for="planningToRead">Planning to read</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="notRead" checked @change="setFilter" />
        <label for="notRead">Not read</label>
      </span>
    </div>
  </base-card>
</template>

<script>
  export default {
    emits: ['change-filter'],
    data() {
      return {
        filters: {
          alreadyRead: true,
          planningToRead: true,
          notRead: true,
        }
      }
    },
    methods: {
      setFilter(event) {
        const inputId = event.target.id;
        const isActive = event.target.checked;
        const updatedFilters = {
          ...this.filters,
          [inputId]: isActive
        };
        this.filters = updatedFilters;
        this.$emit('change-filter', updatedFilters)
      }
    },
  }
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>

<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !nameOfBook.isValid}">
      <label for="nameOfBook">Name of book</label>
      <input type="text" id="nameOfBook" v-model.trim="nameOfBook.val" @blur="clearValidity('nameOfBook')" />
      <p v-if="!nameOfBook.isValid">Name of book must not be empty</p>
    </div>
    <div class="form-control" :class="{invalid: !theAuthorOfTheBook.isValid}">
      <label for="theAuthorOfTheBook">The author of the book</label>
      <input type="text" id="theAuthorOfTheBook" v-model.trim="theAuthorOfTheBook.val" @blur="clearValidity('theAuthorOfTheBook')" />
      <p v-if="!theAuthorOfTheBook.isValid">The author of the book must not be empty</p>
    </div>
    <div class="form-control" :class="{invalid: !description.isValid}">
      <label for="description">Note</label>
      <textarea name="description" id="description" rows="5" v-model.trim="description.val" @blur="clearValidity('description')"></textarea>
      <p v-if="!description.isValid">Note must not be empty</p>
    </div>
    <div class="form-control" :class="{invalid: !status.isValid}">
      <h3>Status</h3>
      <div>
        <input type="radio" id="alreadyRead" value="Already read" v-model="status.val" @blur="clearValidity('status')" />
        <label for="alreadyRead">Already read</label>
      </div>
      <div>
        <input type="radio" id="planningToRead" value="Planning to read" v-model="status.val" @blur="clearValidity('status')" />
        <label for="planningToRead">Planning to read</label>
      </div>
      <div>
        <input type="radio" id="notRead" value="Not read" v-model="status.val" @blur="clearValidity('status')" />
        <label for="notRead">Not read</label>
      </div>
      <p v-if="!status.isValid">At least one expertise must be selected.</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Add</base-button>
  </form>
</template>

<script>
  export default {
    emits: ['save-data'],
    data() {
      return {
        nameOfBook: {
          val: '',
          isValid: true
        },
        theAuthorOfTheBook: {
          val: '',
          isValid: true
        },
        description: {
          val: '',
          isValid: true
        },
        status: {
          val: '',
          isValid: true
        },
        formIsValid: true
      }
    },
    methods: {
      clearValidity(input) {
        this[input].isValid = true;
      },
      validateForm() {
        this.formIsValid = true;
        if (this.nameOfBook.val === '') {
          this.nameOfBook.isValid = false
          this.formIsValid = false;
        }
        if (this.theAuthorOfTheBook.val === '') {
          this.theAuthorOfTheBook.isValid = false
          this.formIsValid = false;
        }
        if (this.description.val === '') {
          this.description.isValid = false
          this.formIsValid = false;
        }
        if (this.status.val === '') {
          this.status.isValid = false
          this.formIsValid = false;
        }
      },
      submitForm() {
        this.validateForm();

        if (!this.formIsValid) {
          return;
        }

        const formData = {
          bookName: this.nameOfBook.val,
          authorName: this.theAuthorOfTheBook.val,
          desc: this.description.val,
          status: this.status.val,
        }

        this.$emit('save-data', formData);
        console.log(formData);
      }
    }
  }
</script>

<style>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='radio'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='radio'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='radio']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>

<template>
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on }">
      <span v-on="on">
        <svg
          class="add-book-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </span>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Add Book</span>
      </v-card-title>
      <v-form ref="form" v-model="valid" :lazy-validation="lazy">
        <v-card-text>
          <v-text-field
            v-model="book.title"
            :counter="50"
            :rules="[required('title'), minLength('title', 3), maxLength('title', 50)]"
            label="Title"
            hint="type title of your book"
            required></v-text-field>
          <v-text-field
            v-model="book.author"
            :counter="50"
            :rules="[required('author'), minLength('author', 5), maxLength('author', 50)]"
            label="Author"
            hint="type author of your book"
            required></v-text-field>
            <v-text-field
            v-model="book.published_at"
            :counter="20"
            :rules="[required('published'), minLength('published', 4), maxLength('published', 20)]"
            label="Published"
            hint="type published at of the book"
            required></v-text-field>
          <v-text-field
            v-model="book.image_url"
            :counter="200"
            :rules="[required('imageUrl'), maxLength('imageUrl', 200), urlFormat()]"
            label="Image Url"
            hint="type image url"
            required></v-text-field>
          <v-textarea
          solo
          v-model="book.description"
          :rules="[required('description'), maxLength('description', 500)]"
          name="input-7-4"
          label="Description"
          :counter="500"
          hint="type short description of the book"
          required
        ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >Add Book</v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="dialog = false"
            >Close</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import validations from '@/utils/validations';

export default {
  name: 'Modal',
  data() {
    return {
      dialog: false,
      valid: true,
      lazy: false,
      book: {
        title: '',
        author: '',
        description: '',
        published_at: '',
        image_url: '',
      },
      ...validations,
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.dialog = false;
        this.$store.dispatch('addBook', this.book);
      }
    },
  },
};
</script>

<template>
  <section class="container mt-5">
    <h1 class="text-capitalize mb-3 font-inconsolata third-color font-brand-size">
      Edit Book
    </h1>
    <v-card>
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
            >Save</v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="redirectToStore"
            >Cancel</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import validations from '@/utils/validations';

export default {
  name: 'EditBook',
  data() {
    return {
      valid: true,
      lazy: false,
      ...validations,
    };
  },
  mounted() {
    this.$store.dispatch('loadBook', this.$route.params.id);
  },
  computed: {
    ...mapState({
      book: (state) => state.book,
    }),
  },
  methods: {
    redirectToStore() {
      this.$router.push('/store');
    },
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.dialog = false;
        this.$store.dispatch('editBook', this.book);
      }
    },
  },
};
</script>

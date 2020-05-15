<template>
<div>
  <v-col cols="12" v-for="book in books" :key="book.id" >
    <Book
      :title="book.title"
      :description="book.description"
      :publishedDate="book.published_at"
      :createdDate="book.created_at"
      />
  </v-col>
</div>
</template>

<script>
import { mapState } from 'vuex';
import Book from './Book.vue';

export default {
  name: 'Books',
  components: {
    Book,
  },
  computed: mapState([
    'books',
  ]),
  mounted() {
    this.$store.dispatch('loadBooks');
  },
};
</script>

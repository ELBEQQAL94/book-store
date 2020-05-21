<template>
  <div>
    <div v-if="books.length === 0">
      <v-alert type="info">Your Store Is Empty</v-alert>
    </div>
    <v-row>
      <v-col cols="12" sm="6" md="6" v-for="book in books" :key="book.id">
        <Book
          :title="book.title"
          :description="book.description"
          :publishedDate="book.published_at"
          :createdDate="book.created_at"
          :author="book.author"
          :url="book.image_url"
          :id="book.id"
        />
      </v-col>
    </v-row>
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
  computed: mapState(['books']),
};
</script>

<template>
  <v-card>
    <v-img
      class="white--text align-end"
      height="200px"
      :src="url"
    >
      <v-card-title class="primary-color bg-second-color">{{title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{author}}</v-card-subtitle>

    <v-card-text class="text--primary font-mono">
      <div>
        <p>{{description}}</p>
      </div>

      <div>Published At: {{publishedDate}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text>Share</v-btn>
      <v-btn @click="remove(id)" color="#F44336" text>Remove</v-btn>
      <v-btn :to="{ name: 'EditBook', params: {id}}" color="primary" text>Eddit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Book',
  props: {
    title: String,
    description: String,
    publishedDate: String,
    createdDate: String,
    author: String,
    url: String,
    id: Number,
  },
  methods: {
    remove(id) {
      this.$store.dispatch('deleteBook', id);
    },
  },
};
</script>

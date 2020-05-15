<template>
  <div>
    <v-card>
      <v-row>
        <v-col cols="4">
          <div>POSTER</div>
        </v-col>
        <v-col cols="8">
          <div>INFO</div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    title: String,
    description: String,
    publishedDate: String,
    createdDate: String,
  },
};
</script>

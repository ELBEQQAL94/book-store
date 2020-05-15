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
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-text>
          <v-text-field
            v-model="title"
            :counter="10"
            :rules="Rules"
            label="Title"
            required></v-text-field>
          <v-text-field
            v-model="author"
            :counter="10"
            :rules="Rules"
            label="Author"
            required></v-text-field>
            <v-text-field
            v-model="published"
            :counter="10"
            :rules="Rules"
            label="Published"
            required></v-text-field>
            <v-text-field
            v-model="imageUrl"
            :counter="10"
            :rules="Rules"
            label="Image Url"
            required></v-text-field>
          <v-textarea
          solo
          :rules="Rules"
          name="input-7-4"
          label="Description"
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
          <!-- <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>-->
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
  <!-- <v-dialog v-model="dialog" persistent max-width="500">
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
      <add-book-form />
    </v-card>
  </v-dialog>-->
</template>

<script>

export default {
  name: 'Modal',
  data() {
    return {
      dialog: false,
      valid: true,
      title: '',
      author: '',
      description: '',
      published: '',
      imageUrl: '',
      Rules: [
        (v) => !!v || 'This Field is required',
        (v) => (v && v.length <= 10) || 'Field must be less than 10 characters',
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.dialog = false;
      }
    },
  },
};
</script>

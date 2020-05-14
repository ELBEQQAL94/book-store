<template>
  <form @submit.prevent="addBook">
    <div class="modal-body">
      <div class="form-group">
        <label for="title">Title</label>
       <input
          v-model="book.title"
          type="text"
          class="form-control"
          id="title"
          aria-describedby="title"
        />
      <small
        v-if="errors.isError"
        class="form-text text-muted error"
      >{{errors.title}}</small>
      </div>
      <div class="form-group">
        <label for="author">Author</label>
        <input
          v-model="book.author"
          type="text"
          class="form-control"
          id="author"
        />
        <small
        v-if="errors.isError"
        class="form-text text-muted error"
      >{{errors.author}}</small>
      </div>
      <div class="form-group">
        <label for="image-url">Image Url</label>
        <input
          v-model="book.imageUrl"
          type="text"
          class="form-control"
          id="image-url"
        />
        <small
        v-if="errors.isError"
        class="form-text text-muted error"
      >{{errors.imageUrl}}</small>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          v-model="book.description"
          class="form-control"
          id="description"
          rows="3"></textarea>
          <small
        v-if="errors.isError"
        class="form-text text-muted error"
      >{{errors.description}}</small>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">Add Book</button>
    </div>
  </form>
</template>

<script>

export default {
  name: 'AddForm',
  data() {
    return {
      errors: {
        isError: false,
      },
      book: {
        title: '',
        author: '',
        description: '',
        imageUrl: '',
      },
    };
  },
  methods: {
    addBook() {
      const {
        title,
        author,
        description,
        imageUrl,
      } = this.book;

      if (title.trim().length === 0) {
        this.errors.title = 'Title required.';
        this.errors.isError = true;
      } else {
        this.errors.title = '';
        this.errors.isError = false;
      }

      if (author.trim().length === 0) {
        this.errors.author = 'Author required.';
        this.errors.isError = true;
      } else {
        this.errors.author = '';
        this.errors.isError = false;
      }

      if (description.trim().length === 0) {
        this.errors.description = 'Description required.';
        this.errors.isError = true;
      } else {
        this.errors.description = '';
        this.errors.isError = false;
      }

      if (imageUrl.trim().length === 0) {
        this.errors.imageUrl = 'imageUrl required.';
        this.errors.isError = true;
      } else {
        this.errors.imageUrl = '';
        this.errors.isError = false;
      }

      if (this.errors.isError) {
        console.log('Something Wrong...');
      } else {
        this.$store.dispatch('addBook', this.book);
        console.log('Book Added...');
      }
    },
  },
};

</script>

<template>
  <form @submit.prevent="addBook">
    <div class="modal-body">
      <div class="form-group">
        <label for="title">Title</label>
       <input
          v-model="title"
          type="text"
          class="form-control"
          id="title"
          aria-describedby="title"
        />
        <small id="title" class="form-text text-muted">Show Errors</small>
      </div>
      <div class="form-group">
        <label for="author">Author</label>
        <input
          v-model="author"
          type="text"
          class="form-control"
          id="author"
        />
      </div>
      <div class="form-group">
        <label for="image-url">Image Url</label>
        <input
          v-model="imageUrl"
          type="text"
          class="form-control"
          id="image-url"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          v-model="description"
          class="form-control"
          id="description"
          rows="3"></textarea>
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
      errors: [],
      user: {
        title: '',
        author: '',
        description: '',
        imageUrl: '',
      },
    };
  },
  methods: {
    addBook() {
      // if (this.title && this.author && this.description && this.imageUrl) {
      //   return true;
      // }

      // this.errors = [];

      // if (!this.title) {
      //   this.errors.push('Title required.');
      // }
      // if (!this.author) {
      //   this.errors.push('Author required.');
      // }
      // if (!this.description) {
      //   this.errors.push('Description required.');
      // }
      // if (!this.imageUrl) {
      //   this.errors.push('imageUrl required.');
      // }
      // return false;
      console.log(this.user);
    },
  },
};

</script>

<template>
  <div
    class="modal fade"
    id="Modal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">Add Book</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <add-form />
      </div>
    </div>
  </div>
</template>

<script>
import AddForm from './AddForm.vue';

export default {
  name: 'Modal',
  components: {
    AddForm,
  },
};
</script>

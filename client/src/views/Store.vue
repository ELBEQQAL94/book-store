<template>
  <section class="container mt-5">
    <h1 class="text-capitalize mb-3 font-inconsolata third-color font-brand-size">
      my books <VModel />
    </h1>
    <hr class="bg-second-color" />
    <Books />
    <Modal />
  </section>
</template>

<script>
import Books from '@/components/main/Books.vue';
import VModel from '@/components/main/VModel.vue';

export default {
  name: 'Store',
  components: {
    Books,
    VModel,
  },
};
</script>

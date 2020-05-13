<template>
  <section class="container mt-5">
   <h1 class="mb-4 h1 text-capitalize">register</h1>
   <register-form />
  </section>
</template>

<script>
import RegisterForm from '@/components/main/RegisterForm.vue';

export default {
  name: 'Register',
  components: {
    RegisterForm,
  },
};
</script>

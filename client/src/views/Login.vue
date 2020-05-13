<template>
  <section class="container mt-5">
   <h1 class="mb-4 h1 text-capitalize">log in</h1>
   <login-form />
  </section>
</template>

<script>
import LoginForm from '@/components/main/LoginForm.vue';

export default {
  name: 'Register',
  components: {
    LoginForm,
  },
};
</script>

<template>
  <main>
    <top-bar />
    <router-view/>
    <Footer />
  </main>
</template>

<script>
import TopBar from '@/components/main/TopBar.vue';
import Footer from '@/components/main/Footer.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    Footer,
  },
};
</script>

<style>

</style>

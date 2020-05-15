<template>
  <v-app>
    <top-bar />
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TopBar from '@/components/main/TopBar.vue';

export default {
  name: 'App',
  components: {
    TopBar,
  },
  mounted() {
    this.$store.dispatch('loadBooks');
  },
};
</script>

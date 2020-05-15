<template>
  <div>
    <v-app-bar app color="#333232" dark>
      <div class="d-flex align-center justify-center">
        <v-app-bar-nav-icon class="d-md-none" @click="toggle"></v-app-bar-nav-icon>
        <router-link to="/register" title="store books" text>
          <span class="mr-2 font-inconsolata font-brand-size">S.B</span>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn class="d-none d-sm-flex" text to="/store" title="store">
        <v-badge color="green" :content="count">Store</v-badge>
      </v-btn>

      <v-btn class="d-none d-sm-flex" to="/profile" title="username" text>
        <span class="mr-2">ELBEQQAL YOUSSEF</span>
      </v-btn>
    </v-app-bar>

    <navigation-drawer :drawer="drawer" :count="count" />
  </div>
</template>

<script>
import NavigationDrawer from '@/components/main/NavigationDrawer.vue';
import { mapState } from 'vuex';

export default {
  name: 'TopBar',
  components: {
    NavigationDrawer,
  },
  computed: {
    ...mapState(['count', 'drawer']),
  },
  methods: {
    toggle() {
      this.$store.dispatch('toggleDrawer');
    },
  },
};
</script>

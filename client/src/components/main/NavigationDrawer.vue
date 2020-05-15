<template>
  <v-navigation-drawer color="#0c0a0a" dark v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>
              <v-btn text to="/store" title="store" class="mt-2">
                <v-badge color="green" :content="count">Store</v-badge>
              </v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn to="/profile" title="username" text >
                <span class="mr-2">ELBEQQAL YOUSSEF</span>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>

export default {
  name: 'NavigationDrawer',

  props: {
    drawer: Boolean,
    count: Number,
  },
};
</script>

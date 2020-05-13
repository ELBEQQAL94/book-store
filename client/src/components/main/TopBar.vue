<template>
<div class="bg-primary-color">
  <nav class="navbar navbar-expand-lg navbar-dark container">
    <router-link
        class="
        navbar-brand
        third-color
        font-inconsolata
        font-brand-size
        "
        to="/register"
        title="store book"
    >
      Store Books
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
            class="nav-link third-color"
            to="/store"
            title="store"
          >
            Store
            <span class="badge bg-second-color">{{count}}</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link third-color"
            to="/profile"
            title="username"
          >
            EL BEQQAL YOUSSEF
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link
            class="nav-link third-color text-uppercase"
            to="/register"
            title="register"
          >
            register
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link third-color text-uppercase"
            to="/login"
            title="login"
          >
            login
          </router-link>
        </li> -->
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TopBar',
  computed: mapState([
    'count',
  ]),
};
</script>

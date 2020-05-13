import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/Store.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileUser.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

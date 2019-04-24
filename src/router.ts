import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/post1',
      name: 'post1',
      component: () => import(/* webpackChunkName: "about" */ './views/Post.vue'),
    },
  ],
  /* ページ遷移時にページ先頭に移動する. */
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

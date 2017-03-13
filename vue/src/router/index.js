import Vue from 'vue';
import Router from 'vue-router';
import Moodle from '../components/Moodle';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Moodle',
      component: Moodle,
    },
  ],
});

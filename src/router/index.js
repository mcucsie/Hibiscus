import Vue from 'vue';
import Router from 'vue-router';

import Moodle from '../views/Moodle';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Moodle,
    },
  ],
});

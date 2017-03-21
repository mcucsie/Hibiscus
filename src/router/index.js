import Vue from 'vue'
import Router from 'vue-router'

import Student from '../views/Student.vue'
import Forum from '../views/Forum.vue'
import Menu from '../views/Menu.vue'
import Settings from '../views/Settings.vue'
import Moodle from '../views/Moodle'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', redirect: 'student' },
    { path: '/student', component: Student },
    { path: '/forum', component: Forum },
    { path: '/menu', component: Menu },
    { path: '/settings', component: Settings },

    { path: '/moodle', component: Moodle }
  ],
});

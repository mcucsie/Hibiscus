// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import { sync } from 'vuex-router-sync'
import Components from './components/_index'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

sync(store, router)

Vue.use(MuseUI)

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

new Vue({
  router,
  store,
  ...App
}).$mount('#app')

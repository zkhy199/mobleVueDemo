// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import App from './App'
import router from './router'
import VueScroller from 'vue-scroller'
import vuex from 'vuex'

Vue.use(MuseUI);
Vue.use(vuex);
Vue.use(VueScroller);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



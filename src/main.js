// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuei18n from 'vue-i18n'
import VueResouce from 'vue-resource';
import 'common/css/font-awesome.css'

Vue.config.productionTip = false
Vue.use(vuei18n);
Vue.use(VueResouce);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

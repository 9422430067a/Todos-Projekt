import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.use(BootstrapVueIcons)

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  // created() {
  //   store.commit('initializeStore');
  // }
}).$mount('#app');

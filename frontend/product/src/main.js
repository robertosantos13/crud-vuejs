import Vue from 'vue';
import App from './App.vue';

import 'materialize-css';
import 'materialize-css/sass/materialize.scss';

import VModal from 'vue-js-modal/dist/index.nocss.js';
import 'vue-js-modal/dist/styles.css';
import money from 'v-money';
Vue.use(VModal, { dialog: true }, money, { precision: 4 });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

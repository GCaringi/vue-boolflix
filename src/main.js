import Vue from 'vue'
import App from './App.vue'

/*----------------------
  VUE LANG CODE FLAGS
----------------------*/
import LangFlag from 'vue-lang-code-flags';

/*--------------------
      FONTASWESOME
---------------------*/
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

/*--------------------
      TAILWINDCSS
---------------------*/
import './index.css'

Vue.component('lang-flag', LangFlag);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

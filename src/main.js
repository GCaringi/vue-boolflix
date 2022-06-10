import Vue from 'vue'
import App from './App.vue'

/*----------------------
  VUE LANG CODE FLAGS
----------------------*/
import LangFlag from 'vue-lang-code-flags';
 
Vue.component('lang-flag', LangFlag);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

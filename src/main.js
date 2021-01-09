import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import '@/assets/css/normalize.css' //初始化浏览器默认样式
import FastClick from 'fastclick'//fastclick使用
FastClick.attach(document.body);

Vue.config.productionTip = false
//111111
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

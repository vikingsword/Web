import Vue from 'vue'
import App from './App.vue'
// 如果是 index.js 的话 js 可以省略
import routes from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routes
}).$mount('#app')

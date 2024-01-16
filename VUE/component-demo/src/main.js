import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8081"
// 将axios挂载到vue上面，给vue加了一个http的属性，属性值为axios
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 将 elementui 中所有的组件都注册上
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')



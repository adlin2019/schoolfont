import Vue from 'vue'
import App from './App.vue'

// 引入BootstrapVue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// 引入ElementUI组件库
import Element from 'element-ui'

// 引入ElementUI样式
import 'element-ui/lib/theme-chalk/index.css'

// 引入路由
import router from '@/router'

// 引入store
import store from "@/store";

Vue.use(Element)
Vue.config.productionTip = false

// 定义vue实例
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

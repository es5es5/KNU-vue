import Vue from 'vue'
import './plugins/axios'
import './plugins/element'
import './plugins/magic-grid'
import './plugins/animante-css'
import './plugins/grid-layout'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

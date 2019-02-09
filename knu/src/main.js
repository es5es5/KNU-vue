import Vue from 'vue'
import './plugins/vuetify'
import './plugins/axios'
import './plugins/element'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// new Vue({
// 	el: '#app',
// 	router,
// 	store,
// 	components: { App },
// 	template: '<App/>'
// })

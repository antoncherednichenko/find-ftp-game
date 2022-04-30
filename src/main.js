import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel'
import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueCarousel)

Vue.filter('dateParser', value =>  new Date(value).toLocaleDateString('ru'))
Vue.filter('capitalizeFirsLetter', value =>  value[0].toUpperCase() + value.slice(1))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

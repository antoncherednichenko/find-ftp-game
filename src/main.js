import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel'
import './assets/tailwind.css'
import { initializeApp } from "firebase/app";

Vue.config.productionTip = false

Vue.use(VueCarousel)

Vue.filter('dateParser', value =>  new Date(value).toLocaleDateString('ru'))
Vue.filter('capitalizeFirsLetter', value =>  value[0].toUpperCase() + value.slice(1))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const firebaseConfig = {
  apiKey: 'AIzaSyDp48OmOzFqNGKrSdgD72t2Yup-fqPKTbE',
  authDomain: 'ftp-games-733b7.firebaseapp.com',
  projectId: 'ftp-games-733b7',
  storageBucket: 'ftp-games-733b7.appspot.com',
  messagingSenderId: '569793341090',
  appId: '1:569793341090:web:5085b2f239953257b5d9fb'
}

const app = initializeApp(firebaseConfig)
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import 'firebase/firestore'
import VueFire from 'vuefire'
import VueMq from 'vue-mq'
import Meta from 'vue-meta'
import VueConfetti from 'vue-confetti'
import Notifications from 'vue-notification'

Vue.config.productionTip = false

let app = '';

firebase.initializeApp({
  apiKey: "AIzaSyCIcmuglEMvweN3mQZeC8NQttKeIDbcfck",
  authDomain: "designerrecon-89d6e.firebaseapp.com",
  databaseURL: "https://designerrecon-89d6e.firebaseio.com",
  projectId: "designerrecon-89d6e",
  storageBucket: "designerrecon-89d6e.appspot.com",
  messagingSenderId: "999001331934"
})

const settings = {
  timestampsInSnapshots: true
}

Vue.use(VueFire)
Vue.use(Meta)
Vue.use(VueConfetti)
Vue.use(Notifications)

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})

const firestore = firebase.firestore();
firestore.settings(settings);
export const db = firestore

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
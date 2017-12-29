// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'
import {config} from './helpers/firebaseConfig'
Vue.use(router)

Vue.config.productionTip = false

let app
const initApp = () => {
  firebase.initializeApp(config)
  // database.init()
}

initApp()

firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App },
      store,
      created () {
        this.$store.dispatch('setUser', user || false)
      }
    })
  }
})

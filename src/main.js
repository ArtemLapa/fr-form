import './styles/style.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import { BootstrapVue, IconsPlugin, FormPlugin, FormGroupPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import { ValidationProvider } from 'vee-validate'
import "./vee-validate"
import './firebase'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(FormPlugin)
Vue.use(FormGroupPlugin)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC3efgj9eVQPWg9MHEZi06T7LJOsNT9H_s',
    libraries: 'places',
  },
})
Vue.use(VuePhoneNumberInput)
Vue.component('vue-phone-number-input', VuePhoneNumberInput)
// Vue.use(VeeValidate)
Vue.component('ValidationProvider', ValidationProvider)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

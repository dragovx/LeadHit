import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'materialize-css/dist/js/materialize.min'
import Vuex from './store'

createApp(App).use(router).use(Vuex).mount('#app')

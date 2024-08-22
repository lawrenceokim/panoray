import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/js/responsive.js'
import './style.css'
import './scss/style.scss'
createApp(App)
.use(router)
.mount('#app');

import { createApp } from 'vue'
import "./assets/dist/css/adminlte.css"
import App from './App.vue'
import router from './router/routes'

createApp(App).use(router).mount('#app')

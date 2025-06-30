import './assets/config.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setupAxios } from './plugins/api'

const app = createApp(App)

app.use(createPinia())
setupAxios()
app.use(router)

app.mount('#app')

import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes/router'
import { createPinia } from 'pinia'
import VueKonva from 'vue-konva';


const pinia = createPinia();
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(VueKonva)

app.mount('#app')

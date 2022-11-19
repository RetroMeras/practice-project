import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes/router'
import { createPinia } from 'pinia'
import VueKonva from 'vue-konva';
import VueDndZone from 'vue-dnd-zone'
import 'vue-dnd-zone/vue-dnd-zone.css'


const pinia = createPinia();
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(VueKonva)
app.use(VueDndZone)

app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { articleStore } from './store'
import ButtonTemplate from './components/ButtonTemplate.vue'
import './style.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.component('ButtonTemplate', ButtonTemplate)

app.mount('#app')

const store = articleStore()
//store.fetchArticles()
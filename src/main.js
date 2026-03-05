import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { articleStore } from './store'
import './style.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

const store = articleStore()
store.fetchArticles()
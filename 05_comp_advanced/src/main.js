import { createApp } from 'vue'
//import App from './App.vue'
import App from './AppPI.vue'
//import App from './AppSlot.vue'
//import App from '@/AppExam.vue'
//import App from './AppTodo.vue'

const app = createApp(App)
app.provide('globalPrivide', 'globalProvide')
app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// router를 app에서 사용한다.
app.use(router)

app.mount('#app')

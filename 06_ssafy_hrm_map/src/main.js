import { createApp, ref } from 'vue'
import App from './App.vue'

const app = createApp(App)

// TODO: 01. bootstrap관련 css와 js를 로딩하세요.

// END

// TODO: 02-1. vuetify 관련 설정을 로딩하세요.

// END

// TODO: 03-1. 카카오 관련 라이브러리를 로딩하세요.

// END

// 임시로 전역에서 관리할 상태들 - 추후 pinia로 변경
app.provide(
  'globalStatus',
  ref({
    isLoggedIn: false,
    loginUser: {},
    alertMsg: (msg) => alert(msg),
  }),
)
app.mount('#app')

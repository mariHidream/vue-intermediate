import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store' // Vuex 스토어 임포트

const app = createApp(App)
app.use(store) // Vuex 스토어 등록
app.mount('#app')
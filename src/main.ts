import { createApp } from 'vue'
import './common/assets/styles/main.scss'
import App from './App.vue'
import router from './common/plugins/router'

const app = createApp(App)

app.use(router).mount('#app')

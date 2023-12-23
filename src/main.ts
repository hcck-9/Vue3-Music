import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/base.scss'
import '@/assets/theme.scss'

import App from './App.vue'
import router from './router'
import '@/utils/extend'
// 导入 pinia
import pinia from '@/stores/index'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

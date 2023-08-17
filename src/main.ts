import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/router.ts'

//引入element-plus，vue-router
createApp(App).use(ElementPlus, {
    size: 'small', zIndex: 3000
}).use(router).mount('#app')

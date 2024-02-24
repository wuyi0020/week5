import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';



const pinia = createPinia()
pinia.use(({ store }) => {
    store.$router = markRaw(router)
});

createApp(App).use(router).use(LoadingPlugin).use(pinia)
    .mount('#app');



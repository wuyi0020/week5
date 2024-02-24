import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import toastr from 'toastr'
import { LoadingPlugin } from 'vue-loading-overlay';
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-loading-overlay/dist/css/index.css';
import 'toastr/build/toastr.css'



const pinia = createPinia()
pinia.use(({ store }) => {
    store.$router = markRaw(router)
});

createApp(App).use(router).use(LoadingPlugin).use(pinia).use(toastr)
    .mount('#app');



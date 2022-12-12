import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import 'bootstrap'

import AOS from 'aos'
import 'aos/dist/aos.css'

// Import component
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

window.$ = window.jQuery = jQuery

const app = createApp(App)
app.use(router)

app.component('Loading', Loading)
app.mount('#app', AOS.init({ }))

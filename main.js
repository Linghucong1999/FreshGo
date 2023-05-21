import App from './App'
import Http from './http/HttpServer.js'
// #ifndef VUE3
import Vue from 'vue'
import './router'

Vue.config.productionTip = false
Vue.prototype.$Http = Http
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
    createSSRApp
} from 'vue'
import router from './router/index.js'
export function createApp() {
    const app = createSSRApp(App)
	app.config.globalProperties.$Http=Http
	app.config.globalProperties.router=router
    return {
        app
    }
}
// #endif
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootswatch/dist/litera/bootstrap.min.css'
import './assets/styles/main.css'

const app = createApp(App)
app.use(router)
app.mount("#app");

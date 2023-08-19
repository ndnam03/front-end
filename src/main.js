import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/index.css";
import axios from "vue-axios";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
// If you don't need the styles, do not connect

window.axios = axios;

createApp(App).use(store).use(VueSweetalert2).use(router).mount("#app");

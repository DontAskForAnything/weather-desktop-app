import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/style.css'

// Create the app instance
const app = createApp(App);

// Use axios with Vue
app.use(VueAxios, axios)

// Mount the app to the DOM element with id "app"
app.mount('#app');

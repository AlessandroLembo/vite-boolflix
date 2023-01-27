import { createApp } from 'vue'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


library.add(faStar);

import App from './App.vue'

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')

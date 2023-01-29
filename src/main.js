import { createApp } from 'vue'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';



library.add(solidStar, regularStar);

import App from './App.vue'

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')

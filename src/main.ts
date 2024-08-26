import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css'; // Import Tailwind CSS
import { FontAwesomeIcon } from './fa';

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);

createApp(App).mount('#app');
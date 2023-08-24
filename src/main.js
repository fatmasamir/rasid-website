import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';
import router from './routes/index.js';
import BaseButton from './components/ui/BaseButton.vue';

import Navbar from './components/layout/navbar/Navbar.vue';
import PageHeader from './components/layout/pageHeader/PageHeader.vue';
import i18n from './plugins/i18n';
import { initVeeValidate } from './plugins/vee-validate';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import 'vue-js-modal/dist/styles.css';
const app = createApp(App);
app.use(router);
app.use(store);
initVeeValidate();
app.use(i18n);

app.component('base-button', BaseButton);
app.component('navbar', Navbar);
app.component('PagesHeader', PageHeader);

app.mount('#app');

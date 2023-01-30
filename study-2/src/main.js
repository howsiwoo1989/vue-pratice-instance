import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';

import signup from './assets/css/signup.css';
Vue.use(signup);
new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');

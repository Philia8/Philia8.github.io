import { createApp } from 'vue'
import App from './App.vue'
import Counter from './components/Counter.vue';

const vue = createApp(App);
vue.component('Counter', Counter);
vue.mount('#app');

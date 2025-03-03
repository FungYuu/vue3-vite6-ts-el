import { createApp } from 'vue';

import './style.css';
import 'normalize.css';
import '@/assets/css/base.scss';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// eslint-disable-next-line import/order
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createPinia } from 'pinia';

import App from './App.vue';

const app = createApp(App);

app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

const pinia = createPinia();
app.use(pinia);

app.mount('#app');

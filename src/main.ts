
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ImageListContainer from './components/ImageListContainer.vue';
import './styles/font.scss';

const app = createApp(App);

// 全域註冊組件
app.component("ImageListContainer", ImageListContainer);

app.use(router).mount('#app');

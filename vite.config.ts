import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import path from 'path';
const pathSrc = path.resolve(__dirname, 'src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  //这里进行配置别名
  resolve: {
    alias: {
      '@': pathSrc // @代替src
    }
  }
});

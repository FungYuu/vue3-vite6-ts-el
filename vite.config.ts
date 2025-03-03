import path from 'path';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

const pathSrc = path.resolve(__dirname, 'src');

const fePort = 1118;
const serverOrigin = 'http://localhost:1110';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ]
    })
  ],
  // 服务器设置
  server: {
    cors: true, // 默认启用并允许·任何源
    host: '0.0.0.0', // 指定服务器主机名
    port: fePort, // 指定服务端口号
    open: true, // 运行自动打开浏览器
    strictPort: true, // 若3030端口被占用,直接结束项目
    proxy: {
      '/api': {
        target: serverOrigin,
        changeOrigin: true,
        secure: false // 忽略自签名证书
      }
    }
  },
  //这里进行配置别名
  resolve: {
    alias: {
      '@': pathSrc // @代替src
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/css/mixins.scss" as *;`
      }
    }
  }
});

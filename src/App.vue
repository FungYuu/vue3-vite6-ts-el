<template>
  <el-config-provider :locale="zhCn">
    <Suspense>
      <router-view></router-view>
    </Suspense>
  </el-config-provider>
</template>

<script lang="ts" setup>
// 全局配置国际化
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

// 日期和时间本地化
import 'dayjs/locale/zh-cn';
</script>
<style lang="scss">
#app {
  flex: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1250px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

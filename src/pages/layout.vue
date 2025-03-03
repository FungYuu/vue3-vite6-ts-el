<template>
  <el-container>
    <el-header style="background: #fff; padding: 0"> </el-header>
    <div class="main-content">
      <Suspense>
        <router-view></router-view>
      </Suspense>
    </div>
  </el-container>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.el-container {
  min-height: 100%;
  position: relative;
  .el-header {
    width: 100%;
    position: absolute;
    top: 0;
    height: 46px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }
  .main-content {
    flex: 1;
    padding: 0;
    margin-top: 46px;
    min-height: calc(100vh - 102px);
  }
  .el-footer {
    height: 46px;
    padding: 0;
  }
}
</style>

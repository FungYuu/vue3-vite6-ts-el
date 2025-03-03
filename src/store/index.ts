import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    username: 'Kylin'
  }),
  // 相当于Vue中的计算属性，具有缓存属性，值不改变多次使用，只调用一次
  // 箭头函数第一个参数就是state
  getters: {},
  // 方法 支持同步和异步
  actions: {}
});

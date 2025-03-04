module.exports = {
  extends: ['@commitlint/config-conventional', 'cz'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'init', // 初始化
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'ui', // 更新 ui
        'docs', // 文档（documentation）
        'style', // 格式（不影响代码运行的变动）
        'perf', // 性能优化
        'release', // 发布
        'deploy', // 部署
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
        'merge', // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
        'build' // 打包
      ]
    ],
    // <type> 格式 小写
    'type-case': [2, 'always', 'lower-case'],
    // <type> 不能为空
    'type-empty': [2, 'never'],
    // <scope> 范围能为空，选填
    'scope-empty': [0, 'never'],
    // <scope> 范围格式
    'scope-case': [0],
    // <subject> 主要 message 不能为空
    'subject-empty': [2, 'never']
  }
};

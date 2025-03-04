module.exports = {
  types: [
    { value: 'init', name: 'init:     初始提交' },
    { value: 'feat', name: 'feat:     新特性、新功能' },
    { value: 'fix', name: 'fix:      修复bug' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    样式修改不影响逻辑' },
    { value: 'perf', name: 'perf:     优化相关，比如提升性能、体验' },
    { value: 'refactor', name: 'refactor: 代码重构' },
    { value: 'test', name: 'test:     添加测试' },
    { value: 'chore', name: 'chore:    更改配置文件' },
    {
      value: 'build',
      name: 'build:    编译相关的修改，例如发布版本、对项目构建或者依赖的改动'
    },
    { value: 'ci', name: 'ci:       持续集成修改' },
    { value: 'revert', name: 'revert:   回滚到上一个版本' },
    { value: 'merge', name: 'merge:    合并其他分支代码' }
  ],
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // 如果allowcustomscopes为true，则使用
    customScope: '请输入修改范围(可选):',
    subject: '请输入简要描述(必填):',
    body: '详细描述. 使用"|"换行:\n',
    breaking: 'Breaking Changes列表:\n',
    footer: '关闭的issues列表. E.g.: #31, #34:\n',
    confirmCommit: '确认提交?'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['breaking', 'footer']
};

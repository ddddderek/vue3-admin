module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:  新功能' },
    { value: 'fix', name: 'fix:  修复' },
    { value: 'docs', name: 'docs:  文档变更' },
    { value: 'style', name: 'style:  代码格式' },
    { value: 'refactor', name: 'refactor:  重构' },
    { value: 'perf', name: 'perf:  性能优化' },
    { value: 'test', name: 'test:  增加测试' },
    { value: 'chroe', name: 'chroe:  构建过程或辅助工具的变动' },
    { value: 'revert', name: 'revert:  回退' },
    { value: 'build', name: 'build:  打包' }
  ],

  // 步骤
  messages: {
    type: '请选择提交的类型',
    customScope: '请输入修改的范围（可选）',
    subject: '请简要描述提交（必填）',
    body: '请输入详细描述（可选）',
    footer: '请输入要关闭的issue（可选）',
    confirm: '确认要谁用以上信息提交？（y/n）'
  },
  // 跳过的步骤
  skipQuestions: ['body', 'footer'],
  // 简要描述信息字符长度
  subjectLimit: 72
}

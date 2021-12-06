module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则
  roles: {
    // type 的类型定义：表示 git 提交的 type 必须再一下类型范围之内
    'type-enum': [
      // 当前验证的错误级别
      2,
      // 再什么情况下进行验证
      'always',
      // 反省内容
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chroe', 'revert', 'build']
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  }
}

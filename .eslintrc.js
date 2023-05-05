module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['taro'],
  globals: {
  },
  rules: {
    // 在这里添加你的自定义规则
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     singleQuote: true,
    //     trailingComma: 'all',
    //   },
    // ],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

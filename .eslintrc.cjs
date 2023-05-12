module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts'],
  settings: {
    react: {
      version: 'detect', // Required to silence the warning of eslint-plugin-react thrown on running lint command
    },
  },
  root: true,
};

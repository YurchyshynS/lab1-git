import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
        fetch: 'readonly',
        MutationObserver: 'readonly'
      }
    },

    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-console': 'warn',
    }
  },

  {
    ignores: ['dist', 'node_modules']
  }
];

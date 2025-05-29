import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  {
    ignores: ['dist'],
  },
  ...tseslint.configs.strict,
  eslintConfigPrettier,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: '.',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      prettier: prettier,
    },
    rules: {
      // Core overrides
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',

      // React hooks (essential)
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      // Prettier integration (using .prettierrc for configuration)
      'prettier/prettier': 'error',
    },
  }
)

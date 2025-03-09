import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import nestjs from 'eslint-plugin-nestjs';

export default [
  js.configs.recommended,
  {
    ignores: ['node_modules', 'dist', '.turbo', 'build/**/*.js', '**/public/'],
  },
  {
    plugins: {
      prettier,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      semi: ['error', 'always'],
      indent: 'off',
      eqeqeq: 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          tabWidth: 2,
        },
      ],
      'multiline-ternary': 'off',
      'no-multiple-empty-lines': 'off',
      'no-console': 'warn',
      'no-undef': 'off',
      'comma-dangle': ['warn', 'always-multiline'],
      'space-before-function-paren': 'off',
      'max-len': [
        'error',
        {
          code: 120,
          tabWidth: 2,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
        },
      ],
    },
  },
  // NEXT.JS (CLIENT)
  {
    files: ['apps/client/**/*.{ts,tsx,js,jsx}'],
    plugins: {
      react,
      '@typescript-eslint': typescriptEslint,
      prettier,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      react: {
        version: '19.0.0',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': 'off',
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  // NESTJS (SERVER)
  {
    files: ['apps/server/**/*.ts'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      nestjs,
      prettier,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];

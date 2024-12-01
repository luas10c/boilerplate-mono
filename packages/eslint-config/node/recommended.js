import globals from 'globals'

import js from '@eslint/js'

import ts from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

import prettier from 'eslint-plugin-prettier'

/** @type{import('eslint').Linter.Config[]} */
const config = [
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.es2022
      }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  },
  {
    plugins: {
      '@typescript-eslint': ts,
      prettier
    },
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
      }
    },
    rules: {
      ...prettier.configs.recommended.rules
    }
  }
]

export default config

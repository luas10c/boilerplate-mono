import globals from 'globals'

import react from 'eslint-plugin-react'
import jsx from 'eslint-plugin-jsx-a11y'
import tailwindcss from 'eslint-plugin-tailwindcss'

import nodejs from '../node/recommended.js'

/** @type{import('eslint').Linter.Config[]} */
const config = [
  ...nodejs,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react,
      'jsx-a11y': jsx,
      tailwindcss
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
        React: true
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      ...jsx.configs.recommended.rules,
      ...tailwindcss.configs.recommended.rules
    }
  }
]

export default config

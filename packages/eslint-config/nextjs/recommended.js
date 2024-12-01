import next from '@next/eslint-plugin-next'

import reactjs from '../react/recommended.js'

/** @type{import('eslint').Linter.Config} */
const config = [
  ...reactjs,
  {
    plugins: {
      '@next/next': next
    },
    rules: {
      ...next.configs.recommended.rules
    }
  }
]

export default config

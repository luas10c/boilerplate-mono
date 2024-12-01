/** @type {import('eslint').Linter.Config} */
const config = {
  env: {
    es2022: true,
    browser: true
  },
  extends: [
    'prettier',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    'plugin:tailwindcss/recommended',
    '../node/config.cjs'
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  }
}

module.exports = config

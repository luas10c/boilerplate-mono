const config = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true
  },
  extends: ['next', '@packages/eslint-config/react/config.cjs']
}

module.exports = config

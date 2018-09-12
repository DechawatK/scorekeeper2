/* global require module */
const {
  injectBabelPlugin
} = require('react-app-rewired')
const rewireStyledComponents = require('react-app-rewire-styled-components')

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env)

  if (env === 'production') {
    config = injectBabelPlugin('babel-plugin-jsx-remove-data-test-id', config)
  }
  return config
}
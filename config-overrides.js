const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@constants': 'src/constants',
    '@views': 'src/views',
    '@hoc-helpers': 'src/hoc-helpers',
    '@utils': 'src/utils',
    '@services': 'src/services',
  })(config)

  return config
}
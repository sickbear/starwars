const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@src': 'src',
    '@components': 'src/components',
    '@ui': 'src/components/UI',
    '@constants': 'src/constants',
    '@views': 'src/views',
    '@hoc-helpers': 'src/hoc-helpers',
    '@utils': 'src/utils',
    '@services': 'src/services',
    '@hooks': 'src/hooks',
  })(config)

  return config
}
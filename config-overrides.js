const { alias } = require('react-app-rewire-alias')


module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@constans': 'src/constans',
    '@hoc-helpers': 'src/hoc-helpers',
    '@services': 'src/services',
    '@utils': 'src/utils',
  })(config);

  return config;
}
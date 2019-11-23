const path = require('path');

module.exports = {
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
  ,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  chainWebpack: config => {
    config.resolve.alias
        .set('@', path.resolve(__dirname, 'client/src'));
}
};

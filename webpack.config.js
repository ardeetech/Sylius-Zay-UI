const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('public/ardee-bootstrap-zay')
  .setPublicPath('/ardee-bootstrap-zay')
  .addEntry('ardee-bootstrap-zay', './themes/SyliusDemoFrontendZay/assets/app.js')
  .disableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSassLoader()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction());

const config = Encore.getWebpackConfig();
config.name = 'ardeeBootstrapZay';

module.exports = config;

1. Copy files from repository to `./themes/SyliusDemoFrontendZay`

2. Install Encore (Only for sylius **<1.12**)

```bash
composer require encore
```

3. Install node dependencies

```bash
yarn
yarn add @symfony/webpack-encore sass-loader@^13.0.0 node-sass -D
yarn add lodash.throttle -D
yarn add bootstrap@^4.5.0 bootstrap.native@^3.0.0 glightbox axios form-serialize @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons popper.js
yarn add @popperjs/core
```

4. Import bootstrap-theme config in the main webpack file

```diff
# ./webpack.config.js

+ const ardeeBootstrapZay = require('./themes/SyliusDemoFrontendZay/webpack.config');

- module.exports = [shopConfig, adminConfig, appShopConfig, appAdminConfig];
+ module.exports = [shopConfig, adminConfig, appShopConfig, appAdminConfig, ardeeBootstrapZay];
```

For sylius **1.11** and **1.12** change output paths
    
```diff
# ./webpack.config.js
// Shop config
Encore
-  .setOutputPath('public/build/shop/')
-  .setPublicPath('/build/shop')
-  .addEntry('shop-entry', './vendor/sylius/sylius/src/Sylius/Bundle/ShopBundle/Resources/private/entry.js')
+  .setOutputPath('public/ardee-bootstrap-zay')
+  .setPublicPath('/ardee-bootstrap-zay')
+  .addEntry('app', './themes/SyliusDemoFrontendZay/assets/app.js')
  .disableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enableSassLoader();
```

5. Edit project config files

```diff
# ./config/packages/assets.yaml

framework:
    assets:
        packages:
+            ardeeBootstrapZay:
+                json_manifest_path: '%kernel.project_dir%/public/ardee-bootstrap-zay/manifest.json'
```

```diff
# ./config/packages/webpack_encore.yaml

webpack_encore:
    output_path: '%kernel.project_dir%/public/build'
    builds:
+        ardeeBootstrapZay: '%kernel.project_dir%/public/ardee-bootstrap-zay'
```

```diff
# ./config/packages/_sylius.yaml
sylius_theme:
+    legacy_mode: true # for sylius 1.9, 1.10, 1.11, 1.12
```

6. To build the assets, run one of the following commands  
```bash
# compile assets once
yarn encore dev

# recompile assets automatically when files change
yarn encore dev --watch

# recompile assets automatically with live reload
yarn encore dev-server

# create a production build
yarn encore production
```

In Sylius 1.12 you can use predefined commands

```bash
# compile assets once
yarn build

# recompile assets automatically when files change
yarn watch
```

7. Change theme in the admin panel by visiting the Edit Channel page

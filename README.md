# vue2app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# Problems with this template

1. There was a problem creating the production package. We solved by installing another uglify plugin.
> Vue app error
https://codereviewvideos.com/blog/how-i-fixed-uglifyjs-unexpected-token-name-dropin/

> version 1 needed, do not install latest
https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/360

2. By default the production webpack file was not including the prefix of the ghpages project, so we added `publicPath: '/ghpages-package/'` to the webpack.prod.config.js

# How to deploy
The following command will create the minified scripts and deploy the app to the gh-pages branch. This is done with the `gh-pages` package installed in this app. For more information check [their documentation](https://github.com/tschaub/gh-pages). 

```bash
npm run deploy
```

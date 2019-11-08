# Webpack Simple
Simple Webpack Build Template

### Installation 
```
npm install
```

### Build Dev Version
```
npm run start
```

### Build Production Version
```
npm run build
```

### Features
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Autoprefixer via [postcss-loader](https://github.com/postcss/postcss-loader)
* Uglify via [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)
* JQuery Support via [jquery](https://www.npmjs.com/package/jquery)
* Font Face fix


### Working Structure
```
| dist
| - css
| - - main.css
| - js
| - - main.min.js
| node_modules
| src
| - fonts
| - js
| - - unicorns.js
| - scss
| - - postcss.config.js
| - - style.scss
| - index.js (Entrypoint)
| index.htm
| package.json
| webpack.config.js
```
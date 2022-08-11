const { VueLoaderPlugin } = require('vue-loader');

module.exports =
{
  entry:
  {
    "js/bundle": "./src/app/index.js"
  },
  output:
  {
    path: __dirname + "/src/public",
    filename: '[name].js'
  },
  module:
  {
    rules:
    [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:
        {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins:
  [
    new VueLoaderPlugin()
  ]
};

const path = require('path');
const DEV_SERVER_PORT = 3000;
const ASSETS_PATH = '/assets/';
const BUILD_PATH = path.resolve(__dirname, `../public${ASSETS_PATH}`);

module.exports = {
  entry: [
    './src/App'
  ],
  devServer: {
    port: DEV_SERVER_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    contentBase: 'public/'
  },
  output: {
    publicPath: ASSETS_PATH,
    path: BUILD_PATH,
    filename: '[name].bundle.js',
    chunkFilename: '[id].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0']
          }
        }
      }
    ]
  }
};
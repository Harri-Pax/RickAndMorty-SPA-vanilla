const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  mode:'development',

  resolve: {
    extensions: ['.js']
  },
  module:{
    rules:[
      {
        test:/\.m?js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options:{
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    })
  ],

  devServer:{
    static:{
      directory: path.join(__dirname,'dist'),
      watch: true,
    },
    watchFiles:path.join(__dirname,"./**"),
    compress: true,
    historyApiFallback: true,
    port: 3006,
    open: true,
  }
};
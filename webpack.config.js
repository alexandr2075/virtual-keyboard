const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'), filename: '[hash].js', clean: true
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Virtual Keyboard',
      filename: 'index.html',
      template: 'index.html',
    }),
  ],
  devServer: {
    static: './dist',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        enforce: 'pre', test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.scss$/i,
      //   use: ['style-loader', 'css-loader']
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};

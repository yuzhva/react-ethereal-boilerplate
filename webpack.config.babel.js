import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: './dist/scripts.js'
  },
  devServer: {
    port: 8080,
    contentBase: __dirname
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            ['es2015', { modules: false }],
            'react'
          ]
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.template.html' }),
  ]
};

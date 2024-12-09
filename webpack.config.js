const HtmlWebpackPlugin = require('html-webpack-plugin')

const nodeExternals = require('webpack-node-externals');

const common = {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    alias: {
      '@material-ui/core': '@material-ui/core/es'
    }
  },
}

module.exports = [
  {
    ...common,
    entry: './src/client',
    output: {
      path: `${__dirname}/public`
    }
  },
  {
    ...common,
    target: 'node',
    entry: './src/server',
    externals: [nodeExternals()]
  }
]



module.exports = {
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].[contenthash].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}

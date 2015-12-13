var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'client.js'),
  output: {
    path: './public/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel'
      }
    ]
  }
}

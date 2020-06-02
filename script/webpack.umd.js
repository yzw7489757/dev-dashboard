const { resolve } = require('path');
const base = require('./webpack.base');

module.exports = {
  ...base,

  mode: 'none', // production

  devtool: 'source-map',

  entry: {
    'index': resolve(__dirname, '../src/index.tsx'),
  },
}
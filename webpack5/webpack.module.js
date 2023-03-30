const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    index: './module/index.mjs'
  },
  output: {
    path: path.resolve(process.cwd(), './distmodule')
  }
}
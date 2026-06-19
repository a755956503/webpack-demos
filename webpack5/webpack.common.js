const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    index: './common/index.js'
  },
  output: {
    path: path.resolve(process.cwd(), './distcommon')
  }
}
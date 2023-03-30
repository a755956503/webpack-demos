const Config = require('webpack-chain');

const config = new Config();
config.module.rule('tsx').test(/\.tsx$/).use('ts').loader('ts-loader');
config.module.rule('tsx').use('ts1').loader('ts-loader1')

config.module.rule('xxx')
let webpackConfig = config.toConfig();
console.log(JSON.stringify(webpackConfig))

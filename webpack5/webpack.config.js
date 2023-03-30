const webpack = require('webpack');
const path = require('path')
module.exports = {
  mode: 'development',
  module: {
    rules: [
      // {
      //   test: /\.png$/,
      //   type: 'asset',
      //   // parser: {
      //   //   dataUrlCondition: {
      //   //     maxSize: 1024 // 20kb
      //   //   }
      //   // },
      //   // generator: {
      //   //   // 将图片文件输出到 static/imgs 目录中
      //   //   // 将图片文件命名 [hash:8][ext][query]
      //   //   // [hash:8]: hash值取8位
      //   //   // [ext]: 使用之前的文件扩展名
      //   //   // [query]: 添加之前的query参数
      //   //   filename: "static/imgs/[hash:8][ext][query]",
      //   // }
      // }
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              // fallback: {
              //   loader: require.resolve('file-loader'),
              //   options: {
              //     name: `img/[name].[hash:8].[ext]`
              //   }
              // },
            }
          }
        ]
        
      }
      // {
      //   test: /\.png$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       // options: {
      //       //   name: `img/[name].[hash:8].[ext]`
      //       // }
      //     }
      //   ]
        
      // }
    ]  
  },
  resolve: {
    alias: {
      './obj': path.resolve(__dirname, './src/alias/obj')
    }
  },
  plugins: [
    // new webpack.NormalModuleReplacementPlugin(/obj/, function (resource) {

    //   // if (resource.request.includes('dropdown')) {
    //   //   console.log('resource: ', resource.request)
    //   // }
    //   // if (resource.createData && resource.createData.request) {
    //   //   resource.request = resource.request.replace('obj', 'alias/obj')
    //   // }
    //   resource.request = resource.request.replace('obj', 'alias/obj')
      
    // }),
  ]
}
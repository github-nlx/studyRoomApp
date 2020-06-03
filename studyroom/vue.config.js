const envNow = process.env.NODE_ENV
console.log(envNow)
module.exports = {
  publicPath: '/app', // 部署下的目录
  outputDir: 'dist', // 打包生成文件名
  assetsDir: 'studyroom/',
  indexPath: 'studyroom/index.html',
  devServer: {
    host: 'localhost',
    port: '8888'
    // proxy:{
    //   '/app':{
    //     target:'http://localhost:8080',//请求代理地址
    //     changeOrigin:true,//是否支持跨域
    //     pathRewrite:{
    //       '^/app':''
    //     }
    //   }
    // }
  }
}

const envNow = process.env.NODE_ENV
console.log(envNow)
module.exports = {
  publicPath: '/app',
  outputDir: 'dist',
  assetsDir: 'studyroom/',
  indexPath: 'studyroom/index.html',
  devServer:{
    port:'8888'
  }
}

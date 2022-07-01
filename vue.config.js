// 官方说明：https://cli.vuejs.org/zh/config/#runtimecompiler
// const path = require('path');
// const webpack = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // 基本路径
  publicPath: '/',
  // 构建项目时的输出目录
  outputDir: 'dist',
  // 保存时使用'eslint-loader'进行检查
  lintOnSave: true,
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  productionSourceMap: false,
  devServer: {
    port: '8088',
    // 自启动浏览器
    open: true,
    // hot: true,
    // https: false,
    // hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8090',
        ws: true,
        // 可理解为使用'/api'来代替target路径
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
}

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// 官方说明：https://cli.vuejs.org/zh/config/#runtimecompiler
module.exports = {
  // 基本路径
  publicPath: '/',
  // 构建项目时的输出目录
  outputDir: 'dist',
  // 保存时使用'eslint-loader'进行检查
  lintOnSave: true,
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  devServer: {
    port: '8088',
    proxy: 'http://localhost:8090',
    // 自启动浏览器
    open: true
  }
}

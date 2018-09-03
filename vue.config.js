module.exports={
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // 基本路径
    baseUrl: './',
    // 静态资源目录
    assetsDir: 'static',
    // 输出文件目录
    outputDir: 'dist',
    // webpack 配置
    chainWebpack: ()=>{},
    configureWebpack: ()=>{},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // webpack-dev-server 相关配置
    devServer:{
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        //proxy: null, // 设置代理
        // 配置多个代理
        // proxy: {
        //   "/api":{
        //       target: "",
        //       ws:true,
        //       changeOrigin: true
        //   }
        // }
    }

}
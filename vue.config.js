module.exports={
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // 基本路径
    baseUrl: '',
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
        // 配置多个代理
        port: 8081,
        proxy: {
          "/v1":{
              target: "http://charger.natapp1.cc/",
              ws:true,
              changeOrigin: true
            },
           "/wechat":{
               target: "http://charger.natapp1.cc/",
               ws:true,
               changeOrigin: true
           }
        }
    }
}
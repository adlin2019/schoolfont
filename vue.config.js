const path = require('path')
function resolve(dir){

    return path.join(__dirname, dir)

}


module.exports = {

    // 配置服务
    devServer: {

        // 配置主机
        host: 'localhost',

        // 配置端口
        port: 9000

    },


    // 调整 webpack 配置
    configureWebpack: {


        resolve: {

            // 给src目录起别名"@",以后可以使用@来代替src
            alias: {
                '@': resolve('src')
            }

        }


    }



}

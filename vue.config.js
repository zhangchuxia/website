const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? "./" : '/',
  productionSourceMap: false,
  assetsDir: 'static',
  pluginOptions: {
    rules: [
      // 处理图片
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 10, // 把小于 10kb 的文件 转换成 Base64 格式
            name: 'img/[name].[ext]' // 指定路径

          }
        }
      },
      // 处理字体
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240, // 可根据实际情况自行设定
            name: 'fonts/[name].[hash:8].[ext]'
          }
        }
      },
      // 处理音视频
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240, // 可根据实际情况自行设定
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      },
    ]
  }
}
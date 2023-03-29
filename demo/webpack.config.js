const path = require("path")
const{resolve} =path

const webpackHtmlPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
// const { EnvironmentPlugin } = require("webpack")


//webpack 所有配置都应该写在下面
module.exports =  {
   mode:"development",
   //指定入口文件----------------------
   entry:"/src/index.ts",

   //指定打包文件所在目录---------------------
   output:{
      //指定打包文件的目录
      path:resolve(__dirname,"dist"),

      //打包后的文件名
      filename:"bundle.js",

      //环境配置
      environment:{
          // arrowFunction:false    //webpack是否使用箭头函数
          //const:false   //webpack是否使用const
      } 
   },

   //指定webpack打包时要使用的模块-----------------
    module:{
      //指定要加载的规则
      rules:[
        //js/ts文件处理，语法转换
        {
          //test 指定的是规则生效的文件
          test:/\.ts$/,
          //要使用的loader, 从后往前执行
          use:[
            "babel-loader",
            // 配置loader   ???
            // {
            //   loader:"babel-loader",  //指定加载器
            //   options:{
            //     //设置预定义环境
            //     presets:[
            //       //指定环境插件
            //       [
            //         "@babel/preset-env",
            //         //配置信息
            //         {
            //           //要兼容的目标浏览器
            //           targets:{   
            //             "chrome":"58"
            //           },
            //           //指定corejs的版本呢
            //           corejs:"4",
            //           //使用corejs的方式 "usage"表示按需加载
            //           useBuiltIns:"usage"
            //         }
            //       ]
            //     ]
            //   }
            // },
           "ts-loader"
        ],  
        //要排除的文件
        exclude:/node_modules/
        },

        //css相关
        {
          test:/\.less$/,
          use:[
             "style-loader",
             "css-loader",
             //引入postcss
             {
              loader:"postcss-loader",
              options:{
                postcssOptions:{
                  plugins:[
                   [
                    "postcss-preset-env",
                    {
                      browsers:"last 2 version"
                    }
                  ]
                  ]
                }
              }
            },
             "less-loader"
          ]
        }
      ]
    },

    //配置webpack插件----------------
    plugins:[
      //自动生成html模板的插件
      new webpackHtmlPlugin(
        {
          template:"./src/index.html"
        }
      ),

      //清除每次打包的dist
      new CleanWebpackPlugin()
    ],

    //用来设置引用的模块(作为模块去引用)----------------
    resolve:{
       extensions:[".ts",".js"]
    }

}
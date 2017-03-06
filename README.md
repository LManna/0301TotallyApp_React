# 0301TotallyApp_React:bowtie:
>This is a program test of React building by webpack, it has finish some easy function to
test React api, what I think important and difficult is config the webpack.config.js file,
so when I study the react-native, I will build a program basing on express and webpack;

##Babel+webpack+react创建项目+webpack-dev-server自动刷新
    1.安装node.js 并配置好环境变量，参考文档[开头的几段是配置环境变量的](https://my.oschina.net/u/2328177/blog/842851)
    2.创建一个项目文件，文件名字0301TotallyApp_React（自定义）,里面创建两个文件夹dev和output
        ```touch dev```
        ```touch output```
        两个文件分别用来装开发文件和webpack打包好后输出的文件
    3. **npm init**初始化项目
        里面会让你配置一些项目名称等一些项目信息，注意，一般项目名称不让大写；
        还要配置一下你的出口输出js文件是默认的index.js 还是自定义
    4.安装react依赖
      ```java 
      npm install react react-dom --save
      ```


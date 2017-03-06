# 0301TotallyApp_React:bowtie:
>This is a program test of React building by webpack, it has finish some easy function to
test React api, what I think important and difficult is config the webpack.config.js file,
so when I study the react-native, I will build a program basing on express and webpack;

##Babel+webpack+react创建项目+webpack-dev-server自动刷新
1.安装node.js 并配置好环境变量，参考文档[开头的几段是配置环境变量的](https://my.oschina.net/u/2328177/blog/842851)
2.创建一个项目文件，文件名字0301TotallyApp_React（自定义）,里面创建两个文件夹dev和output
```
touch dev
```
```
touch output
```
两个文件分别用来装开发文件和webpack打包好后输出的文件
3. **npm init**初始化项目
>里面会让你配置一些项目名称等一些项目信息，注意，一般项目名称不让大写；
>还要配置一下你的出口输出js文件是默认的index.js 还是自定义
4.安装react依赖
```java 
npm install react react-dom --save
```
>这样在jsx的js文件中就可以通过以下方式来引用react模块，之后的模块也都可以这样引用，包括css文件
```javascript
import React from "react";
import ReactDOM from "react-dom";
```
5.安装webpack
```
npm install webpack --save
```
6.安装webpack-dev-sever自动刷新模块
```
npm install webpack-dev-server --save
```
7.配置webpack.config.js文件
>项目根目录下创建webpack的配置文件,webpack.config.js,所有的webpack相关配置都在这里面配置，具体参见其他相关说明
![配置文件](https://github.com/LManna/0301TotallyApp_React/blob/master/img/webpack%E9%85%8D%E7%BD%AE.png)
>其中，myCode.js是输出文件，项目启动会自动创建在output的文件夹中，但是项目中是查不到该文件的；
下面的devServer和plugins可以不写,因为是在测试自动刷新是否好用，module模块也可以不屑，这是热启动的配置；index.jsx是我们的入口js文件
>配置package.json文件来配置项目的启动情况
```javascript
	"scripts":{
		"start":"webpack-dev-server--progress--colors"
    },
```
8.启动项目
**npm start**
访问项目：localhost:8080/index即可；
##react学习内容
1.安装babel模块，为了解析jsx成为浏览器能够识别的js文件
```
npm install babel-loader babel-preset-es2015 babel-preset-react --save
```
2.配置babel
在package.json里面添加babel配置
```
"babel":
    { "presets": [ "es2015", "react" ] }
```
在webpack.config.js中配置module
```
module: { loaders: [{ include: DEV, loader: "babel", }] }
```
3.在入口文件里面引用css，使他也可以实现压缩，在浏览器里面直接引用显示
安装css相关支持模块
	Npm install css-loader style-loader --save;
webpack.config.js中配置
```
module:{
    loaders:[{
        include:Dev,
        loader:"babel-loader",
    },{
        test:/\.css$/,
        loader:"style-loader!css-loader"
    }]
}
```
这样在入口文件直接引用就可以了
```
	import './list.css';
    import React from "react";
    import ReactDOM from "react-dom";
```
##关于上面项目说明：
*当前的项目是单入口，仅仅针对入门级别做个记录，参照react的api进行研发实现功能
*项目主要有两个页面，页面需要切换，更改配置才能看到另外一个；
*当前显示的页面功能是：list页面，主要实现form提交表单即时更新列表，还有点击按钮实现写入的颜色切换；
![listPNG](https://github.com/LManna/0301TotallyApp_React/blob/master/img/list.png)
*index的功能主要针对react-router实现页面无刷新更换内容，如果想看到index的文件，需要在webpack.config.js
中将list的位置替换成为index，浏览器清楚缓存进行访问
*项目clone到本地，npm start就可以直接运行，访问http://localhost:8080/list.html访问list页面
*代码配置到index后访问http://localhost:8080/就可以访问index页面看效果


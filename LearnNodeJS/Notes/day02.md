## 包简介

```
package.json
```

## npm简介

```sh
npm -v      查看npm版本
npm version  查看所有模块的版本
npm search   包名 搜索
npm install/i package     在当前目录下载包
npm remove/r package      删除包
npm install package -g    下载包到全局里
npm install package --save  安装包到package依赖里面
npm install  下载当前的项目所依赖的包
```


## 配置cnpm

```sh
npm install -g cnpm --registry=https://registry.npmmirror.com   安装cnpm
cnpm sync connect   同步官方模块
```

## node搜索包的流程

```sh
# 通过npm下载的包都放在node_modules文件夹中
# 通过npm下载的包，直接通过包名引入即可
```
```javascript
// node在使用模块名字来引入模块时，它会首先在当前目录的node_modules中寻找是否含有该模块
// 如果有则直接使用，如果没有则去上一级目录的node_modules中寻找，直到找到磁盘根目录为主
var math = require('math');
console.log(math)
```
## ES6模块化

## 模块化语法

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="module">
        // 引入模块
        import * as mk from "./mk.js"
        console.log(mk)
    </script>
</body>
</html>
```

```javascript
export let s = 'Hello'

export function fun(){
    console.log('我爱你')
}
```

## 暴露数据语法总结

```javascript
// 分别暴露
export let s = 'Hello'

export function fun(){
    console.log('我爱你')
}
```

```javascript
// 统一暴露
let s = 'Hello'
function fun(){
    console.log('我爱你')
}
export{
    s,
    fun
}
```

```javascript
// 默认暴露
export default{
    s: 'Bon',
    fun: function(){
        console.log('Bon')
    }
}
```

## 引入模块语法总结

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="module">
        // 1.通用引入模块
        import * as mk from "./mk.js"

        // 2.解构赋值形式
        import{s,fun} from './mk.js'
        // as ss设置别名，防止模块内部相同导致出错
        import{s as ss,fun} from './mk.js'
        // 默认暴露对象，设置别名
        import{default as ss} from './mk.js'

        // 3.简便形式   针对默认暴露
        import mk from './mk.js'

    </script>
</body>
</html>
```

## 引入模块方式二

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./mk.js" type="module"></script>
</body>
</html>
```

```javascript
// 入口文件

// 模块引入
import * as m1 from './m1.js';
import * as m1 from './m2.js';
import * as m1 from './m3.js';
```

## babel对ES6模块化代码转换

```
1.安装工具
babel-cli babel-preset-env browserify(webpack)
2.代码转换
npx babel src/js -d dist/js --presets=babel-preset-env
3.打包
npx browserify dist/js/app.js -o dist/bundle.js
```

## 引入npm包

```javascript
import $ from 'jquery';     // const $ = require('jquery');
$('body').css({background:'pink'})
```
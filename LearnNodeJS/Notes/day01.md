## 模块化简介

```javascript
// 模块化
/**
 * 在node中，一个js文件就是一个模块
 * 在node中，每个js文件中的js代码都是独立运行在一个函数中
 *      而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问

// 引入其他模块

/**
 * 在node中，通过require()函数来引入外部的模块
 *      require()可以传递一个文件的路径作为参数，node将会根据路径来引入外表模块
 *      这里路径必须以.或..开头
 * 使用require()函数引入以后，该函数会返回一个对象，这个对象代表引入的模块
 */

let b = require('./index2.js')
console.log(b.a)
```

```javascript
/**
 * 我们可以通过exports来向外部暴露变量和方法
 *      只需要将需要暴露给外部的变量或方法设置为exports的属性即可
 */
// 向外部暴露属性和方法
let a = 'hello'

exports.a = 'hello'

```

## 模块简单的应用

```javascript
var Math = require('./index2');

console.log(Math.add(1,2))
console.log(Math.mul(1,2))
```

```javascript
exports.add = function(a,b){
    return a+b;
}
exports.mul = function(a,b){
    return a*b;
}
```

## 模块两大类

```javascript
/*
模块两大类
    核心模块
        - 由node引擎提供的模块
        - 核心模块的标识就是模块的名字
    文件模块
        - 由用户自定义的模块
        - 文件模块的标识就是文件的路径
*/

// node提供的模块

var fs = require('fs');

console.log(fs)
```

## 模块的详解

```javascript
/**
 * js文件是运行在函数里的
 * 在node中有一个全局对象global，它的作用和网页中的window类似
 *      在全局创建的变量都会存在global的属性保存，
 *      在全局创建的方法都会存在global的方法保存
 * 
 * 在node执行模块中的代码时，会自动添加如下代码
 * function (exports, require, module, __filename, __dirname) {
 * 在代码的底部会添加如下代码
 *      }
 * 
 * 实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递了5个实参
 * 
 * exports
 *  - 该对象用来将变量或函数暴露到外部
 * 
 *  require,
 *  - 函数，用来引入外部的模块
 * 
 * module
 *  - module代表的是当前模块本身
 *  - exports就是module的属性
 *  - 既可以使用exports导出，也可以使用module.exports导出
 * 
 *  __filename
 *  - 当前模块的完整路径
 * 
 *  __dirname
 *  - 当前模块所在文件夹的完整路径
 *  */



// const a = 'hello'
a = 'hello'
console.log(global.a)
console.log(arguments.callee+ '')
console.log(module)
console.log(__filename)
console.log(__dirname)
```

## exports和module_exports

```javascript
var require = require('./index2')

console.log(require.name1)
console.log(require.age1)
require.sayName1();
```

```javascript
// 第一种暴露方式
exports.name = "Noi-q"
exports.age = 18
exports.sayName = function(){
    console.log("Noi-q最牛逼！")
}

// 第二种暴露方式
module.exports = {
    name1: 'Ecioboy',
    age1: 18,
    sayName1: function(){
        console.log("Ecioboy最牛逼！")
    }
}

// exports = module.exports

// exports 和 module.exports
/**
 *  - 通过exports只能使用.的方式来向外暴露内部变量
 *      exports.xxx = xxx
 *  - 而module.exports既可以通过.的形式，也可以直接赋值
 *      module.exports.xxx = xxx
 *      module.exports = {}
 * */
```




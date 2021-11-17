## 扩展运算符的介绍

```javascript
// [...] 扩展运算符能将数组转换为逗号分隔的参数序列

// 声明一个数组
const tf = ['易烊千玺','王元','王俊凯']

// 声明一个函数
function chunwan(){
    console.log(arguments)
}
chunwan(...tf)
```

## 扩展运算符的应用

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div></div>
    <div></div>
    <div></div>
    <script>
        // 1.数组的合并
        const kuaizi = ['王太利','小样']
        const fenghuang = ['增益','菱花']
        // concat 合并数组
        // const zxxpg = kuaizi.concat(fenghuang)
        const zxxpg = [...kuaizi,...fenghuang]
        console.log(zxxpg)

        // 2.数组的克隆
        const sanzhihua = ['E','G','M']
        const sanyecao = [...sanzhihua]
        console.log(sanyecao)

        // 3.将伪数组转为真正的数组
        const divs = document.querySelectorAll('div')
        console.log(divs)
        const divArr = [...divs]
        console.log(divArr)
    </script>
</body>
</html>
```

## Symbol的介绍与创建

```javascript

// 创建Symbol

let s = Symbol();
console.log(s,typeof s);

// 'VCaL' 被用于描述字符串，没有作用
let s2 = Symbol('VCaL');
let s3 = Symbol('VCaL');
console.log(s2===s3)

// Symbol.for 创建      不会被全局作用域登记，所以为true
let s4 = Symbol.for('VCaL')
let s5 = Symbol.for('VCaL')
console.log(s4===s5)

// 不能与其他数据进行运算
// let result = s + 100;

/*
USONB you are so niubility

u undefined
s string symbol
o object
n null number
b boolean
*/

```

## Symbol的使用

```javascript
// 向对象中添加方法 up down

// Symbol是给对象添加属性和方法的
let game = {}

// 第一种：声明一个对象
let methods = {
    up: Symbol(),
    down: Symbol()
}
game[methods.up] = function(){
    console.log('up')
}
game[methods.down] = function(){
    console.log('down')
}
console.log(game)

// 第二种:

let youxi = {
    name: '狼人杀',
    [Symbol('say')]: function(){
        console.log('say')
    },
    [Symbol('zibao')]: function(){
        console.log('zibao')
    }
}
console.log(youxi)
```

## Symbol的内置属性



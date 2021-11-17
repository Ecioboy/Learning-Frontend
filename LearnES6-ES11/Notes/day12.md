## ES10

## 对象扩展方法-Object.fromEntries

```javascript
// 二维数组转换为对象

const result = Object.fromEntries([
    ['name','Ecioboy'],
    ['VCaL','Noi-q']
])
console.log(result)

// Map
const m = new Map();
m.set('name','Ecioboy')
const result2 = Object.fromEntries(m)
console.log(result2)

// Object.entries   ES8,将一个对象转换为二维数组
const arr = Object.entries({
    name: 'Ecioboy'
})
console.log(arr)
```

## 字符串扩展方法-trimStart和trimEnd

```javascript
// trimStart()  清除左边空格
// trimEnd()    清除右边空格

let str = '     i love you      '
console.log(str)
console.log(str.trimStart())
console.log(str.trimEnd())
```

## 数组方法扩展-flat和flatMap

```javascript
// flat
// 将多维数组转换为低维数组
let arr = [1,2,3,[5,6,[7,8]]]
// 参数为深度，是一个数字
console.log(arr.flat(2))

// flatMap
// 将二维数组直接转为一维数组
const arr2 = [1,2,3,4]
const result = arr2.flatMap(item => [item * 10])
console.log(result)
```

## Sysmbol.prototype.description

```javascript
// Sysmbol.prototype.description
// 获取Sysmbol的标识文本
const s = Symbol('Ecio')
console.log(s.description)
```
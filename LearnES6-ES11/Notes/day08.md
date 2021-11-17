## 数值扩展

```javascript

// Number.EPSILON表示的最小精度
function equal(a, b) {
    if(Math.abs(a-b) < Number.EPSILON){
        return true
    }else{
        return false
    }
}
console.log(0.1 + 0.2 === 0.3)
console.log(equal(0.1+0.2,0.3))

// 二进制和八进制
let b = 0b1010; // 二进制
let o = 0o777;  // 八进制
let d = 100;    // 十进制
let x = 0xff;   // 十六进制
console.log(b)
console.log(o)
console.log(d)
console.log(x)

// Number.isFinite 检测一个数值是否为有限值
console.log(Number.isFinite(10))
console.log(Number.isFinite(100/0))

// Number.isNaN 检测一个数值是否为NaN
console.log(Number.isNaN(123))

// Number.parseInt Number.parseFloat字符串转整数
console.log(Number.parseInt('123love'))
console.log(Number.parseFloat('132.31213神奇'))

// Number.isInteger 判断一个数是否为整数
console.log(Number.isInteger(23112.312))

// Math.trunc 将数字的小数部分抹掉
console.log(Math.trunc(23112.312))

// Math.sign 判断一个数到底为整数 负数还是零
console.log(Math.sign(123))
console.log(Math.sign(-123))
console.log(Math.sign(0))
```

## 对象方法扩展

```javascript
// 1. Object.is 判断两个值是否完全相等
console.log(Object.is(120,120))
// 2. Object.assign 对象的合并
let a = {
    d: '1',
    c1: 'Noi-q'
}
let b = {
    d: '2',
    c2: 'Ecioboy'
}
// 合并
console.log(Object.assign(a,b))
// 覆盖
console.log(Object.assign(a,b))
// 3. Object.setPrototypeOf 设置原型对象 Object.getPrototypeOf 获取原型对象

const school = {
    name: 'VCaL'
}
const cities = {
    xq: 'YunNan'
}
Object.setPrototypeOf(school,cities)
console.log(Object.getPrototypeOf(school))
console.log(school)
```
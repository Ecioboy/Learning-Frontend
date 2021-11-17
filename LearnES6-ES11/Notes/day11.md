## ES9新特性

## 扩展运算符和rest参数

```javascript
/**
 * Rest 参数与 spread 扩展运算符在ES6中已经引入，不过ES6中只针对于数组，
 * 在ES9中为对象提供了像数组一样的rest参数和扩展运算符
 */
function connect({host,port,...user}){
    console.log(host);
    console.log(port);
    console.log(user);
}

connect({
    host: '127.0.0.1',
    port: 3306,
    user: 'Noi-q',
    password: 'admin',
    type: 'master'
})

const skillOne = {
    a: 'VCaL',
}
const skillTwo = {
    b: '123'
}
const skillThree = {
    c: '456'
}
const ms = {
    ...skillOne,
    ...skillTwo,
    ...skillThree
}
console.log(ms)
```

## 正则扩展-命名捕获分组

```javascript
// 普通方式

// 声明一个字符串
/*

let str = '<a href="https://www.google.com">VCaL</a>'

// 提取url与标签文本
let str = '<a href="https://www.google.com">VCaL</a>'
const reg = /<a href="(.*)">(.*)<\/a>/;

// 执行
const result = reg.exec(str)
// console.log(result[1])
// console.log(result[2])
*/

// 命名分组捕获方式
let str = '<a href="https://www.google.com">VCaL</a>'

const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;
const result = reg.exec(str)
console.log(result.groups.url)
console.log(result.groups.text)
```

## 正则扩展-反向断言

```javascript
let str = 'dsa12312哈喽123啦啦啦'

// 正向断言
/*
const reg = /\d+(?=啦)/
const result = reg.exec(str)
console.log(result)
*/

// 反向断言
const reg = /(?<=喽)\d+/
const result = reg.exec(str)
console.log(result)
```

## 正则扩展-dotAll模式

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // dot . 元字符  除换行符以外的任意单个字符

        let str = `
        <ul>
            <li>
                <a>hello</a>
                <p>2021</p>
            </li>
            <li>
                <a>hello2</a>
                <p>2021_2</p>
            </li>
        </ul>`;
        // 全局搜索
        const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs;
        // const result = reg.exec(str)
        let result;
        // 保存
        let data = [];
        // 全局搜索遍历
        while(result = reg.exec(str)) {
            console.log(result);
            data.push({title:result[1],time:result[2]});
        }
        console.log(data)
    </script>
</body>
</html>
```
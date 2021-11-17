## promise介绍与基本语法

```javascript
// 实例化promise对象
const p = new Promise((resolve, reject) => {
    setTimeout(() =>{

        let data = '数据库中的用户数据';
        // resolve(data);

        let err = '数据读取失败'
        reject(err);
    },1000)
})
// 调用Promise对象的then方法
p.then((value)=>{
    console.log(value);
},(reason)=>{
    console.log(reason);
})
```

## Promise封装读取文件

```javascript
// 使用Promise封装读取文件

const fs = require('fs');

// 调用方法读取文件
/*
fs.readFile('./cs.md',function(err, data){
    if(!err){
        console.log(data.toString());
    }
})
*/

// 使用Promise封装
const p = new Promise(function(resolve,reject){
    fs.readFile('./cs.md',function(err, data){
        if(!err){
            resolve(data)
        }else{
            reject(err)
        }
    })
})

p.then(function(value){
    console.log(value.toString())
},function(reason){
    console.error('读取失败！')
})
```

## Promise封装AJAX请求

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
        // Promise封装AJAX
        const p = new Promise((resolve, reject) => {
            // 1.创建对象
            const xhr = new XMLHttpRequest();
            // 2.初始化
            xhr.open('GET','http://127.0.0.1:8000/server')

            // 3.发送
            xhr.send();

            // 4.绑定事件
            xhr.onreadystatechange = function() {
                // 判断
                if(xhr.readyState === 4){
                    // 判断响应码 200-299
                    if(xhr.status >= 200 && xhr.status < 300){
                        // 表示成功
                        resolve(xhr.response)
                    }else{
                        // 如果失败
                        reject(xhr.status)
                    }
                }
            }
        })
        
        // 指定回调
        p.then(function(value){
            console.log(value)
        },function(reason){
            console.error(reason)
        })
    </script>
</body>
</html>
```

```javascript
// 1.引入Express
const express = require('express');
// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
// all 可以接收任意类型的请求
app.all('/server',(request,response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*');

    // 设置响应体
    response.send('Hello ES');
});

// 4.监听端口服务
app.listen(8000,() => {
    console.log('服务已经启动，8000端口监听中...')
})
```

## Promise.prototype.then

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
        // 创建Promise对象
        const p = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve('用户数据')
                // reject('出错了')
            },1000)
        })
        // 调用then方法  then方法返回结果是Promise对象，对象状态由回调函数的执行结果决定
        // 1.如果回调函数中返回的结果是 非Promise类型的属性，状态为成功，返回值为对象成功的值
        const result = p.then((value) => {
            console.log(value)
            // 1.非Promise类型的属性
            // return value
            // 2.是Promise对象
            // return new Promise((resolve, reject)=>{
            //     resolve('ok')
            //     // reject('error')
            // })
            // 3.抛出错误
            throw new Error('出错了')
        },(reason) => {
            console.warn(reason)
        })

        // 2.链式调用
        p.then((value) =>{

        },(reason) =>{

        }).then((value)=>{

        },(reason) =>{
            
        })
        console.log(result)
    </script>
</body>
</html>
```

## Promise读取多个文件

```javascript
// 1.引入fs模块

const fs = require('fs');

// 1.普通使用
fs.readFile('./cs.md',function(err, data1){
    fs.readFile('./cs2.md',function(err, data2){
        fs.readFile('./cs3.md',function(err, data3){
            let result = data1 + data2 + data3;
            console.log(result);
        })
    })
})

// 2.使用Promise实现
const p = new Promise((resolve, reject) => {
    fs.readFile('./cs.md', 'utf8', (err, data) => {
        resolve(data);
    })
})
p.then(value => {
    return new Promise((resolve, reject)=>{
        fs.readFile('./cs2.md', 'utf8', (err,data)=>{
            resolve([value,data]);
        })
    })
}).then((value) => {
    return new Promise((resolve, reject)=>{
        fs.readFile('./cs3.md', 'utf8', (err,data)=>{
            // 压入
            value.push(data);
            resolve(value);
        })
    })
}).then(value=>{
    console.log(value.join('\r\n'));
})
```

## catch方法

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
        const p = new Promise((resolve, reject) =>{
            setTimeout(() => {
                // 设置p对象的状态为失败，并且设置失败的值
                reject('出错了')
            },1000)
        })
        // p.then((value) =>{},(reason) =>{
        //     console.error('失败了')
        // })
        p.catch((reason) =>{
            console.warn(reason)
        })
    </script>
</body>
</html>
```
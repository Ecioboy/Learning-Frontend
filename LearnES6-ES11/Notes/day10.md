## ES7新特性

```javascript
// includes 检测数组中是否含有该元素，返回布尔类型值

const s = ['Noi-q','Ecioboy','Bob']
console.log(s.includes('Bon'))
console.log(s.includes('Bob'))

// **
console.log(2 ** 10)
console.log(Math.pow(2,10))
```

## ES8新特性

## async

```javascript
// async函数
/**
 * 函数的返回值为Promise对象
 * Promise对象的结果由async函数执行的返回值决定
 * */
async function fun(){
    // 1.返回一个字符串
    // return 'Hello world'
    // 2.返回的结果不是一个Promise类型的对象，返回的结果就是成功的Promise
    // return;
    // 3.抛出错误,返回的结果是一个失败的Promise
    // throw new Error('出错了')
    // 4.返回的结果如果是一个Promise对象
    return new Promise(function(resolve, reject){
        resolve('成功了')
    })
}

const result = fun()
console.log(result)
```

## await

```javascript
// await表达式

/**
 * await必须写在async函数中
 * await右侧的表达式一般为Promise对象
 * await返回的是Promise成功的值
 * await的Promise失败了，就会抛出异常，需要通过try...catch捕获处理
 */

const p = new Promise(function(resolve, reject) {
    // resolve('成功了')
    reject('失败了')
})
async function main(){
    try{
        let result = await p;
        console.log(result)
    }catch(e){
        console.log(e)
    }
}
main()
```

## async和await结合读取文件

```javascript
// 1.引入fs模块
const fs = require('fs');

// 读取 cs.md

function cs(){
    return new Promise((resolve, reject) =>{
        fs.readFile('../../cs.md',function(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

function cs2(){
    return new Promise((resolve, reject) =>{
        fs.readFile('../../cs2.md',function(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

function cs3(){
    return new Promise((resolve, reject) =>{
        fs.readFile('../../cs3.md',function(err, data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

// 声明async
async function main(){
    let cs_1 = await cs();
    let cs_2 = await cs2();
    let cs_3 = await cs3();
    console.log(cs_1.toString());
    console.log(cs_2.toString());
    console.log(cs_3.toString());
}
main()
```

## async和await发送AJAX请求

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
        // 发送AJAX请求，返回的结果是Promise对象

        function sendAJAX(url){
            return new Promise(function(resolve, reject){
                // 1.创建对象
                const x = new XMLHttpRequest();

                // 2.初始化
                x.open('GET',url)

                // 发送
                x.send()

                // 事件绑定
                x.onreadystatechange = function(){
                    if(x.readyState === 4){
                        if(x.status >= 200 && x.status < 300){
                            // 成功了
                            resolve(x.response)
                        }else{
                            // 失败了
                            reject(x.status)
                        }
                    }
                }
            })
        }

        // Promise then测试
        /*
        sendAJAX('http://127.0.0.1:8000/server')
            .then(value=>{
                console.log(value)
            },(reason)=>{

            })
        */
        // async 和 await测试
        async function main(){
            // 发送AJAX请求
            let result = await sendAJAX('http://127.0.0.1:8000/server')
            console.log(result)
        }
        main();
        
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

## ES8对象方法扩展

```javascript
// 声明对象

const s = {
    name: 'Noi-q',
    cities: ['yunnan','beiji','shanghai']
}

// 获取对象所有的键
console.log(Object.keys(s))
// 获取对象所有的值
console.log(Object.values(s))
// entries 返回的是一个数组，每个成员也是数组
console.log(Object.entries(s))
// 创建Map
const m = new Map(Object.entries(s));
console.log(m.get('name'))

// 对象属性的描述对象
console.log(Object.getOwnPropertyDescriptors(s))

const obj = Object.create(null,{
    name: {
        // 设置值
        value: 'Noi-q',
        // 属性特性
        writable: true,
        configurable: true,
        enumerable: true
    }
})
```
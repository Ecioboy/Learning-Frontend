## 服务端响应JSON数据

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX POST 请求</title>
</head>
<body>
    <style>
        #result{
            width:200px;
            height:100px;
            border:1px solid #903
        }
    </style>
    <div id="result"></div>
    <script>
        const result = document.getElementById("result");
        // 绑定键盘按下事件
        window.onkeydown = function() {
            // 发送请求
            const xhr = new XMLHttpRequest();
            // 设置响应体数据类型
            xhr.responseType = 'json'
            // 初始化
            xhr.open('GET','http://127.0.0.1:8000/json-server')
            // 发送
            xhr.send();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4){
                    if (xhr.status >=200 && xhr.status < 300){
                        // console.log(xhr.response)
                        // result.innerHTML = xhr.response;

                        // 1.手动对数据转换
                        // let data = JSON.parse(xhr.response)
                        // console.log(data)
                        // result.innerHTML = data.name

                        // 2.自动对数据转换
                        console.log(xhr.response)
                        result.innerHTML = xhr.response.name;

                    }
                }
            }
        }
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
app.all('/json-server',(request,response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    // 响应一个数据
    const data = {
        name: 'Noi-q'
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data)
    // 设置响应体
    response.send(str);
});



// 4.监听端口服务
app.listen(8000,() => {
    console.log('服务已经启动，8000端口监听中...')
})
```
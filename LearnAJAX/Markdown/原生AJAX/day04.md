## AJAX实例
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX GET 请求</title>
</head>
<body>
    <style>
        .result{
            width: 200px;
            height: 100px;
            border: 1px solid #90b;
        }
    </style>
    <button type="button">点击发送请求</button>
    <div class="result"></div>
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
app.get('/index',(request,response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('Hello AJAX');
});

// 4.监听端口服务
app.listen(8000,() => {
    console.log('服务已经启动，8000端口监听中...')
})


```
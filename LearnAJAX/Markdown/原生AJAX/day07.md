## AJAX发送post请求

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
        // 获取元素对象
        const result = document.getElementById("result")
        // 绑定事件
        result.addEventListener("mouseover",function(){
            // 1.创建对象
            const xhr = new XMLHttpRequest();
            // 2.初始化，设置类型与url
            xhr.open("POST","http://127.0.0.1:8000/server");
            // 3.发送
            xhr.send();
            // 4.事件绑定
            xhr.onreadystatechange = function(){
                // 判断
                if(xhr.readyState === 4){
                    if(xhr.status >= 200 && xhr.status < 300){
                        // 处理服务端返回的结果
                        result.innerHTML = xhr.response;
                    }
                }
            }
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
app.post('/server',(request,response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('Hello AJAX POST');
});



// 4.监听端口服务
app.listen(8000,() => {
    console.log('服务已经启动，8000端口监听中...')
})
```
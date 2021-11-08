## AJAX请求的基本操作-GET

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
        #result{
            width: 200px;
            height: 100px;
            border: 1px solid #90b;
        }
    </style>
    <button type="button" id="btn">点击发送请求</button>
    <div id="result"></div>
    <script>
        // 获取button元素
        const btn = document.getElementById("btn");
        const result = document.getElementById("result");
        // 绑定事件
        btn.onclick = function(){
            // 1.创建对象
            const xhr = new XMLHttpRequest();
            // 2.初始化 设置请求方法和url
            xhr.open('GET','http://127.0.0.1:8000/server');
            // 3.发送
            xhr.send();
            // 4.事件绑定   处理服务端返回的结果
            /* 
            on 当...的时候
            readystate  是xhr对象的属性，表示状态0 1 2 3 4
            change  改变
            */
            xhr.onreadystatechange = function(){
                // 判断(服务端返回了所有的结果)
                if(xhr.readyState === 4){
                    // 判断响应状态码：200 403 404 401 500
                    // 2xx 开头的都表示成功
                    if(xhr.status >= 200 && xhr.status < 300){
                        // 处理结果 行 头 空行 体
                        // 1.响应行
                        console.log(xhr.status);    //状态码
                        console.log(xhr.statusText);    //状态字符串
                        console.log(xhr.getAllResponseHeaders()); //所有的响应头
                        console.log(xhr.response);  //响应体

                        // 设置result文本
                        result.innerHTML = xhr.response;
                    }else{
                        console.log('处理失败')
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
app.get('/server',(request,response) => {
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
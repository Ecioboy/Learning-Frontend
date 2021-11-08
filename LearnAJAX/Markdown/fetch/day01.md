## fetch函数发送ajax请求

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <button>AJAX</button>
    <script>
        const btn = document.querySelector('button')
        btn.onclick = function() {
            fetch('http://127.0.0.1:8000/fetch-server',{
                // 请求方法
                method: 'POST',
                // 请求头
                headers: {
                    name: 'Noi-q'
                },
                // 请求体
                body: 'username=admin&password=admin'
            }).then(response => {
                // return response.text();
                return response.json();
            }).then(response => {
                console.log(response)
            })
        }
    </script>
</body>
</html>
```

```javascript
const express = require('express');

const app = express();

// fetch 服务
app.all('/fetch-server',(request,response) =>{
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*')
    // response.send('hello jquery ajax');
    const data = {
        name: 'Noi-q'
    }
    response.send(JSON.stringify(data));
})

app.listen(8000,() => {
    console.log('服务已经启动，8000端口监听中...')
})

```
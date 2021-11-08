## Axios发送ajax请求

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Axios发送AJAX请求</title>
</head>
<body>
    <button>GET</button>
    <button>POST</button>
    <button>AJAX</button>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
        const btns = document.querySelectorAll('button')

        // 配置baseURL
        axios.defaults.baseURL = 'http://127.0.0.1:8000'
        // get:url-config
        btns[0].onclick = function(){
            // GET 请求
            axios.get('/axios-server',{
                // url参数
                params: {
                    id: 100,
                    vip: 7
                },
                // 请求头信息参数
                headers: {
                    name: 'Noi-q',
                    age: 20
                }
            }).then(value => {
                console.log(value);
            })
        }

        // post:url-data-config
        btns[1].onclick = function(){
            axios.post('/axios-server',{    // 请求体
                    username: 'admin',
                    password: '12345'
                },{
                // url参数
                params: {
                    id: 200,
                    vip: 9
                },
                // 请求头信息参数
                headers: {
                    height: 180,
                    weight: 180
                },
                
            })
        }

        btns[2].onclick = function(){
            axios({
                // 请求类型
                method: 'POST',
                // url
                url: '/axios-server',
                // url参数
                params: {
                    vip: 100,
                    level: 30
                },
                // 头信息
                headers: {
                    a:100,
                    b:200
                },
                // 请求体参数
                data: {
                    username: 'admin',
                    password: '12345'
                }
            }).then(response => {
                // 响应状态码
                console.log(response.status)
                // 响应状态字符串
                console.log(response.statusText)
                // 响应头信息
                console.log(response.headers)
                // 响应体
                console.log(response.data)
            })
        }
    </script>
</body>
</html>
```

```javascript
const express = require('express');

const app = express();

// axios 服务
app.all('/axios-server',(request,response) =>{
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
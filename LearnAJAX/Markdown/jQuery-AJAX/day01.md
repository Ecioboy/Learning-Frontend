## jQuery-AJAX 发送请求

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="jquery.min.js"></script>
</head>
<body>
    <button>GET</button>
    <button>POST</button>
    <button>通用型方法ajax</button>

    <script>
        $('button').eq(0).click(function() {
            $.get('http://127.0.0.1:8000/jquery-server',{a:100,b:200},function(data){
                console.log(data);
            },'json')
        })

        $('button').eq(1).click(function() {
            $.post('http://127.0.0.1:8000/jquery-server',{a:100,b:200},function(data){
                console.log(data);
            })
        })

        $('button').eq(2).click(function(){
            $.ajax({
                // url
                url: 'http://127.0.0.1:8000/jquery-server',
                // 参数
                data: {
                    a: 100,
                    b: 200
                },
                // 请求类型
                type: 'GET',
                // 响应体结果
                dataType: 'json',
                // 成功的回调
                success: function (data){
                    console.log(data)
                },
                // 超时时间
                timeout: 2000,
                // 失败的回调
                error: function (){
                    console.log("出错了!")
                },
                // 头信息
                headers: {
                    c:300,
                    d:400
                }
            })
        })
    </script>
</body>
</html>
```

```javascript
const express = require('express');

const app = express();

// jquery 服务
app.all('/jquery-server',(request,response) =>{
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
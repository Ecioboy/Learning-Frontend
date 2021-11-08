## AJAX同源策略

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>VCaL</h1>

    <button>点击获取用户数据</button>
    <script>
        const btn = document.querySelector('button');
        btn.onclick = function() {
            const x = new XMLHttpRequest();
            // 因为满足同源策略，所以url可以简写
            x.open('GET', '/data')
            // 发送
            x.send();
            x.onreadystatechange = function(){
                if(x.readyState === 4){
                    if(x.status >= 200 && x.status < 300){
                        console.log(x.response)
                    }
                }
            }

        }
    </script>
</body>
</html>
```

```javascript
const express = require('express');

const app = express();

app.get('/home', (request, response) => {
    // 响应一个页面
    response.sendFile(__dirname + '/index.html')

})

app.get('/data',(request, response)=>{
    response.send('用户数据')
})

app.listen(9000,()=>{
    console.log('服务已经启动，8000端口监听中...')
})

```
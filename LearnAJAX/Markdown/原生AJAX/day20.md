## AJAX设置cors响应头实现跨域

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        #result{
            width:300px;
            height:100px;
            border:1px solid #90d;
        }
    </style>
    <button type="text">点击发送请求</button>
    <div id="result"></div>
    <script>
        const btn = document.querySelector('button')
        btn.onclick = function(){
            // 1.创建对象
            const x = new XMLHttpRequest
            // 2.初始化设置
            x.open('GET','http://127.0.0.1:8000/cors-server')
            // 3.发送
            x.send()
            // 4.绑定事件
            x.onreadystatechange = function() {
                if(x.readyState === 4){
                    if(x.status >= 200 && x.status < 300){
                        // 输出响应体
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
app.all('/cors-server',(request,response)=>{
    // 设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*")  //跨域url
    // response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
    response.setHeader("Access-Control-Allow-Headers", "*") //头信息
    response.setHeader("Access-Control-Allow-Method", "*")  //请求类型
    response.send('hello cors')
})
```
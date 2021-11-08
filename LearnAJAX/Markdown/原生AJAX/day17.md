## jsonp的实现原理

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
            border:1px solid #78a;
        }
    </style>
    <div id="result"></div>
    <script>
    // 处理数据
    function handle(data){
        // 获取result
        const result = document.getElementById('result')
        result.innerHTML = data.name
    }
    </script>
    <script src="http://127.0.0.1:8000/jsonp-server"></script>
</body>
</html>
```

```javascript
app.all('/jsonp-server',(request,response)=>{
    const data = {
        name: 'Noi-q'
    }
    // 将数据转换为字符串
    let str = JSON.stringify(data)
    // 返回结果
    response.end(`handle(${str})`)
})
```
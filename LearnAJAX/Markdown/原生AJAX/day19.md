## jquery发送jsonp请求

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./Markdown/jQuery-AJAX/jquery.min.js"></script>
</head>
<body>
    <style>
        #result{
            width:300px;
            height:100px;
            border: 1px solid #089;
        }
    </style>
    <button>点击发送jsonp请求</button>
    <div id="result"></div>
    <script>
        $('button').eq(0).click(function(){
            $.getJSON('http://127.0.0.1:8000/jquery-jsonp?callback=?',function(data){
                $('#result').html(`
                    名称: ${data.name},
                    校区: ${data.city}
                `)
            })
        })
    </script>
</body>
</html>
```

```javascript
// jquery-jsonp
app.all('/jquery-jsonp',(request,response)=>{
    const data = {
        name: "Noi-q",
        city: ['北京','上海']
    }
    // 将数据转换为字符串
    let str = JSON.stringify(data)
    // 接收callback参数
    let cb = request.query.callback
    // 返回结果
    response.end(`${cb}(${str})`)
})
```
## 取消请求

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>取消请求</title>
</head>
<body>
    <button>点击发送</button>
    <button>点击取消</button>
    <script>
        // 获取元素对象
        const btns = document.querySelectorAll('button')
        let x = null;
        btns[0].onclick = function(){
            x = new XMLHttpRequest();
            x.open('GET','http://127.0.0.1:8000/qq');
            x.send();
        }

        // abort:取消请求
        btns[1].onclick = function(){
            x.abort();
        }
    </script>
</body>
</html>
```

```javascript
// qq
app.all('/qq',(request,response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        // 设置响应体
        response.send('Hello qq');
    },3000)

});
```
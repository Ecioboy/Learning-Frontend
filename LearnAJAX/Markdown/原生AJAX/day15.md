## AJAX请求重复发送问题

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <button>点击发送</button>
    <script>
        // 获取元素对象
        const btns = document.querySelectorAll('button')
        let x = null;
        // 标识变量
        let isSending = false;  //是否正在发送ajax请求
        btns[0].onclick = function(){
            // 判断标识变量
            if(isSending){
                // 如果正在发送，则取消该请求，创建一个新的请求
                x.abort();
            }
            x = new XMLHttpRequest();
            // 修改标识变量的值
            isSending = true;
            x.open('GET','http://127.0.0.1:8000/qq');
            x.send();
            x.onreadystatechange = function(){
                if(x.readyState == 4){
                    // 修改标识变量
                    isSending = false;
                }
            }
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
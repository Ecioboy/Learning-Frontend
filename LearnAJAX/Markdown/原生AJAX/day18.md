## 原生jsonp实践

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    用户名：<input type="text" id="username">
    <p></p>
    <script>
        // 获取input元素
        const input = document.querySelector('input');
        const p = document.querySelector('p');
        
        // 声明handle函数
        function handle(data){
            input.style.border = 'solid 1px #f00'
            // 修改p标签的提示文本
            p.innerHTML = data.msg;
        }

        // 绑定事件
        input.onblur = function() {
            // 获取用户的输入值
            let username = this.value;
            // 向服务端发送请求 检测用户名是否存在
            // 创建script标签
            const script = document.createElement("script");
            // 设置标签的src属性
            script.src = "http://127.0.0.1:8000/check-username"
            // 将script插入到文档中
            document.body.appendChild(script);

        }
    </script>

</body>
</html>
```

```javascript
// 用户名检测是否存在
app.all('/check-username',(request,response)=>{
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    }
    // 将数据转换为字符串
    let str = JSON.stringify(data)
    // 返回结果
    response.end(`handle(${str})`)
})
```
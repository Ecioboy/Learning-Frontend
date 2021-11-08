## AJAX设置请求头参数

```html
// 设置请求头
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
// 自定义请求头
xhr.setRequestHeader('name','Noi-q');

// 3.发送
xhr.send('a=100&b=200&c=300');
```

```javascript
// all 可以接收任意类型的请求
app.all('/server',(request,response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    // 设置响应体
    response.send('Hello AJAX POST');
});

``
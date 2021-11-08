## AJAX-IE缓存问题解决

```html
xhr.open("GET",'http://127.0.0.1:8000/ie?t='+Date.now())
```

```javascript
// 针对ie缓存
app.all('/ie',(request,response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    // 设置响应体
    response.send('Hello IE');
});
```
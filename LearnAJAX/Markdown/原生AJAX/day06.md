## AJAX设置请求参数

- 格式：http://127.0.0.1:8000/server?a=100&b=100

```html
// 2.初始化 设置请求方法和url
xhr.open('GET','http://127.0.0.1:8000/server?a=100&b=200&c=300');
```
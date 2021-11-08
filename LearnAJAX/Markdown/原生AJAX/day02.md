## HTTP
- HTTP (hypertext transport protocol) 协议 [超文本传输协议]，协议详细规定了浏览器和万维网服务器之间互相通信的规则。

#### 请求报文
```
行  GET/POST    /s?ie=utf-8     HTTP1.1
头  Host: baidu.com
    Cookie: name=baidu
    Content-type: application/x-www-form-urlencoded
    User-Agent: chrome 91
空行
体  username=admin&password=admin
```

#### 响应报文
```
行  HTTP1.1     200     OK
头  Content-Type: text/html;charset=utf-8
    Content-length: 2048
    Content-encoding: gzip
空行
体  <html>
        <head>
        </head>
        <body>
            <h1>Hello world</h1>
        </body>
    </html>
``` 


- #### Response Headers 响应头
- #### Request Headers 请求头
- #### Response 响应体


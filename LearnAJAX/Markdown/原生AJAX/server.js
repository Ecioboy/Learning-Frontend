// 1.引入Express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
// all 可以接收任意类型的请求

app.all('/server',(request,response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*');

    // 设置响应体
    response.send('Hello AJAX');
});

app.all('/json-server',(request,response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    // 响应一个数据
    const data = {
        name: 'Noi-q'
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data)
    // 设置响应体
    response.send(str);
});

// 针对ie缓存
app.all('/ie',(request,response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    // 设置响应体
    response.send('Hello IE');
});

//延时响应
app.all('/ys',(request,response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        // 设置响应体
        response.send('Hello ys');
    },3000)

});

// qq
app.all('/qq',(request,response) => {
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        // 设置响应体
        response.send('Hello qq');
    },3000)

});

// 4.监听端口服务
app.listen(8000,() => {
    console.log('服务已经启动，8000端口监听中...')
})

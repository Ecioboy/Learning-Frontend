const express = require('express');

const app = express();

// fetch 服务
app.all('/fetch-server',(request,response) =>{
    // 设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*')
    // response.send('hello jquery ajax');
    const data = {
        name: 'Noi-q'
    }
    response.send(JSON.stringify(data));
})

app.listen(8000,() => {
    console.log('服务已经启动，8000端口监听中...')
})

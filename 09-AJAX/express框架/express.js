
// 引入express
const { request, response } = require('express')
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
// 如果路径是/server，会执行里面代码，并由response做出响应
app.get('/',(request,response)=>{
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应体
    response.send('hello ajax')
    
})

// 监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已经启动，8000端口监听中....')
}) 
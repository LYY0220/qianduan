
// 引入express
const { request, response, json } = require('express')
const express = require('express')

// 创建应用对象
const app = express() 
 
// 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
// 如果路径是/server，会执行里面代码，并由response做出响应  
app.get('/server',(request,response)=>{
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*') 
    // 设置响应体
    response.send('hello ajax2')
    
})
//post请求
app.post('/server',(request,response)=>{
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应头，所有响应头信息都可以接受
    response.setHeader('Access-Control-Allow-Headers','*')
    // 设置响应体
    response.send('hello ajax post')
    
})

//可以接受任何请求
app.all('/server',(request,response)=>{
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应头，所有响应头信息都可以接受
    response.setHeader('Access-Control-Allow-Headers','*')
    // 设置响应体
    response.send('hello ajax post')
})

//json字符串处理
app.all('/json-server',(request,response)=>{
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应头，所有响应头信息都可以接受
    response.setHeader('Access-Control-Allow-Headers','*') 
    // 响应一个数据
    const data = {
        name:"liu"
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data)
    // 设置响应体只能字符串类型
    response.send(str)
})

//ie缓存问题
app.all('/ie',(request,response)=>{
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应头，所有响应头信息都可以接受
    response.setHeader('Access-Control-Allow-Headers','*')
    response.send('ie浏览器缓存问题')
    
})

// 请求超时处理
app.all('/test',(request,response)=>{
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应头，所有响应头信息都可以接受
    response.setHeader('Access-Control-Allow-Headers','*')
    // 手动设置延迟
    setTimeout(function(){
        response.send('请求超时处理')  
    },3000)
    
})

// jq发送ajax请求
app.all('/jquery',(request,response)=>{
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应头，所有响应头信息都可以接受
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {name:"liu"}
    response.send(JSON.stringify(data))   
})

// jq发送ajax请求通用方法
app.all('/jqueryAll',(request,response)=>{
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应头，所有响应头信息都可以接受
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {name:"liu"}
    response.send(JSON.stringify(data))   
})

// fetch方法发送ajax请求
app.all('/fetch',(request,response)=>{
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应头，所有响应头信息都可以接受
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {name:"liu"}
    response.send(JSON.stringify(data))   
})

// jsonp跨域
app.all('/jsonp',(request,response)=>{
    //模拟对象
    const data = {tips:"已经存在"}
    let str = JSON.stringify(data)
    // 返回结果
    response.end(`handle(${str})`)   
})

// jq实现jsonp跨域
app.all('/jqjsonp',(request,response)=>{
    //模拟对象
    const data = {
        name:'liu',
        age:18
    }
    // 对象转化为字符串
    let str = JSON.stringify(data)
    // 接受参数
    let cb = request.query.callback
    // 返回结果
    response.end(`${cb}(${str})`)   
})

// cors,添加响应头解决跨域
app.all('/corss',(request,response)=>{
    //设置响应头    设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('获取成功')

})

// 监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已经启动，8000端口监听中....')
}) 
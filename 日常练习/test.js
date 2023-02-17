// 引入express框架
const { request, response, json } = require('express')
const express = require("express")
// 创建应用对象
const app = express()
// 设置路由规则
app.get("/test1",(request,response)=>{
    // 设置响应头跨域
    response.setHeader('Access-Control-Allow-Origin','*') 
    // 创建响应体
    response.send("test1") 
})

app.get("/test2",(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    var obj = {
        a:request.query.a,
        b:request.query.b
    }
    var jsonobj = JSON.stringify(obj)
    // 创建响应体
    response.send(jsonobj) 
})

app.get("/test3",(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    var obj = {
        a:request.query.a
    }
    var jsonobj = JSON.stringify(obj)
    response.send(jsonobj) 
})

 app.get("/test4",(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    var obj = {
        a:request.query.a
    }
    var jsonobj = JSON.stringify(obj)
    response.send(jsonobj) 
 }) 

app.get("/test5",(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    var obj = {
        a:request.query.a
    }
    var jsonobj = JSON.stringify(obj) 
    response.send(jsonobj)
})

app.get("/test6",(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    var obj = {
        a:request.query.a
    }
    var jsonobj = JSON.stringify(obj)
    response.send(jsonobj) 
})

app.get("/test7",(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    var obj = {
        a:request.query.a
    }
    var jsonobj = JSON.stringify(obj)
    response.send(jsonobj)
}) 

app.get("/test8",(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    var obj = {
        a:request.query.a
    }
    var jsonobj = JSON.stringify(obj)
    response.send(jsonobj)
}) 

app.get("/test9",(rq,rs)=>{
    rs.setHeader('Access-Control-Allow-Origin','*')
    var obj = {
        a:rq.query.a
    } 
    var jsonobj = JSON.stringify(obj)
    rs.send(jsonobj) 
})

app.get("/test10",(rq,rs) => {
    rs.setHeader('Access-Control-Allow-Origin','*')
    var obj = {
        a:rq.query.a
    }
    var jsonobj = JSON.stringify(obj)
    rs.send(jsonobj)
}) 

app.get("/test11",(rq,rs) => {
    rs.setHeader('Access-Control-Allow-Origin','*')
    var obj = {
        a:rq.query.a
    }
    var jsonobj = JSON.stringify(obj)
    rs.send(jsonobj)
}) 

app.get("/test12",(rq,rs) => {
    rs.setHeader('Access-Control-Allow-Origin','*')
    var obj = {
        a:rq.query.a
    }
    var jsonobj = JSON.stringify(obj)
    rs.send(jsonobj)
})

app.get("/test13",(rq,rs) => {
    rs.setHeader('Access-Control-Allow-Origin','*')
    var obj = {
        a:rq.query.a
    }
    var jsonobj = JSON.stringify(obj)
    rs.send(jsonobj)
})















// 设置监听事件
app.listen(8000,()=>{
    console.log("服务已启动，8000端口监听中....")
})
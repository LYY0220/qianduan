// 引入模块
// var mk = require("./../日常练习/nodetest") 
// console.log(mk.aaa,mk.b,mk.c) 



//buffer
// var str = "刘原冶"
// var buf = Buffer.from(str)
// console.log(buf)



// 同步写入
// var fs = require("fs")
// var fd = fs.openSync("同步写入.txt" , "w")
// fs.writeSync(fd,"同步写入")
// fs.closeSync(fd)



// 异步写入
// var fs1 = require("fs")
// fs1.open("异步写入.txt","w",function(err,fd){
//     if(!err){
//         fs1.write(fd,"异步写入",function(err){
//             if(!err){
//                 console.log("异步写入成功")
//             }
//             fs1.close(fd,function(err){
//                 if(!err){
//                     console.log("异步写入文件已关闭")
//                 }
//             })
//         })
//     }else{
//         console.log(err)
//     }
// })



// 简单文件写入
// var fs2 = require("fs")
// fs2.writeFile("简单异步写入.txt","简单异步写入",{flag:"a"},function(err){
//     if(!err){
//         console.log("简单异步写入成功")
//     }else{
//         console.log(err)
//     }
// })



// 流式文件写入
// var fs3 = require("fs")
// var ws3 = fs.createWriteStream("流式文件写入.txt")
// ws3.once("open",function(){console.log("可写流打开了--")})
// ws3.once("close",function(){console.log("可写流关闭了--")})
// ws3.write("流式文件写入1--")
// ws3.write("流式文件写入2--")
// ws3.end()



// 简单文件读取
// var fs4 = require("fs")
// fs.readFile("简单异步写入.txt",function(err,data){
//     if(!err){
//         console.log(data.toString())
//     }
// })



// 流式文件读取 
var fs5 = require("fs")
var rs5 = fs5.createReadStream("流式文件写入.txt")
var ws5 = fs5.createWriteStream("流式文件读取.txt")
rs5.pipe(ws5)

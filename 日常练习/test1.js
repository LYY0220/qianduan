// 引入fs模块
var fs = require("fs")

// 同步文件写入
var fd1 = fs.openSync("同步写入.txt" , "w")     //打开文件，获取文件描述符
fs.writeSync(fd1,"同步文件写入")                //向文件写入内容
fs.closeSync(fd1)                              //保存并关闭文件

// 异步文件写入
fs.open("异步写入.txt","w",function(err,fd2){           //异步文件打开
    if(!err){                                           //打开成功
        fs.write(fd2,"异步文件写入",function(err){      //异步文件写入
            if(!err){                                   //写入成功
                console.log("异步文件写入成功")         
            }       
            fs.close(fd2,function(err){                 //异步文件关闭
                if(!err){                               //关闭成功
                    console.log("异步文件关闭成功")
                }
            })
        })
    }
})

// 简单同步文件写入
fs.writeFileSync("简单同步写入.txt","简单同步文件写入")

// 简单异步文件写入
fs.writeFile("简单异步写入.txt","简单异步文件写入",function(err){
    if(!err){
        console.log("简单异步文件写入成功")
    }
})

// 简单异步文件读取
fs.readFile("简单异步写入.txt",function(err,data){
    if(!err){
        console.log("简单异步文件读取成功："+data.toString())
    }
})

// 流式文件写入
var ws = fs.createWriteStream("流式文件写入.txt")
ws.once("open",function(){console.log("可写流打开--")})
ws.once("close",function(){console.log("可写流关闭--")})
ws.write("流式文件写入1》》》")
ws.write("流式文件写入2》》》")
ws.end()

// 流式文件读取
var rs2 = fs.createReadStream("流式文件写入.txt")
var ws2 = fs.createWriteStream("流式文件读取.txt")
rs2.pipe(ws2)

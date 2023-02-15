// 引入mongoose模块
var mongoose = require("mongoose")

// 连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/test');

// 数据库断开链接,一般不用
// mongoose.disconnect()

// 数据库链接监听
mongoose.connection.once("open",function(){console.log("数据库链接成功")})
mongoose.connection.once("close",function(){console.log("数据库断开成功")})

// schema的使用：集合类型定义
var Schema = mongoose.Schema
var test1Schema = new Schema({
    name:String,
    num:Number,
    age:Number,
})

// model的使用：映射集合
var Test1Schema = mongoose.model("test1",test1Schema)
    // 插入文档
    Test1Schema.create({
        name:"name3",
        num:3,
        age:3
    },function(err){
        if(!err){
            console.log("数据添加成功")
        }
    })
    // 查询文档
    Test1Schema.find({name:"name3"},"name -_id",{skip:3,limit:3},function(err,docs){
        if(!err){
            console.log(docs)
        }else{
            console.log(err)
        }
    })
    // 修改文档
    Test1Schema.updateOne({name:"name3"},{$set:{age:"3"}},function(err){
        if(!err){
            console.log("修改成功")
        }
    })
    // 删除文档
    Test1Schema.deleteMany({name:"name3"},function(err){
        if(!err){
            console.log("删除成功")
        }
    })
// Document的使用
    // 创建
    var name4 = new Test1Schema({
        name:"name4",
        age:4,
        num:4
    })
    // 保存  name4.save()
    name4.save(function(err){
        if(!err){
            console.log("保存成功")
        }
    })
    // 修改  name4.age=44
    name4.update({$set:{age:44}},function(err){
        if(!err){
            console.log("修改成功")
        }
    })
    // 

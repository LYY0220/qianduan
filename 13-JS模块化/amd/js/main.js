(function(){

    requirejs.config({
        baseUrl:"js/",                      // 基本地址
        paths:{
            module1:"./modules/module1",    //模块地址命名
            module2:"./modules/module2"
        }
    })


    requirejs(["module2"],function(module2){
        console.log(module2.arr2)
    })
})()
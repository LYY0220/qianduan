// 有依赖的模块
define(["module1"],function(module1){
    var arr2 = module1.arr1.reverse()
    return {arr2}
})

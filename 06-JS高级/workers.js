// 数据运算函数
function operation(n){
    // 递归调用
    return n <= 2 ? 1 : operation(n-1) + operation(n-2)
}
function newnum(n){
    return n*10
}
// 接收主线程数据
var onmessage = function(e){
    var num = e.data
    // 数据计算
    var num1 = operation(num)
    var num2 = newnum(num)
    // 向主线程发送数据
    postMessage(num2) 
}
(function(window){
    // 私有数据
    var name = "小明"
    var age = 18
    // 操作数据的函数
    function getName(){
        console.log(name) 
    }
    function getAge(){
        console.log(age)
    }
    // 向外暴露对象
    window.getMessage = {
        getName:getName,
        getAge:getAge
    }
})(window)
// 引用内部函数
getMessage.getName 

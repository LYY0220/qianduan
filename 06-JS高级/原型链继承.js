// 原型链继承方法
// 父类型构造函数
function Fn1(){
    this.fn1Name = "父"
}
// 父类型原型添加方法
Fn1.prototype.getFn1Name = function(){
    console.log(this.fn1Name)
}
// 子类型构造函数
function Fn2(){
    this.fn2Name = "子"
}
// 子类型原型 = 父类型实例对象
Fn2.prototype = new Fn1()
// 子类型原型的constructor属性指向子类型构造函数
Fn2.prototype.constructor = Fn2
// 子类型原型添加方法
Fn2.prototype.getFn2Name = function(){
    console.log(this.fn2Name)
}
// 创建子类型实例，可以使用父类型方法
var fn2 = new Fn2()
fn2.getFn1Name()
fn2.getFn2Name()



// 构造函数继承方法（假）
// 父类型构造函数
function Fn3(name) {
    this.name = name
}
// 子类型构造函数
function Fn4(name,age){
    // 使用call()调用父类型构造函数方法
    Fn3.call(this,name)
    this.age = age
}
// 创建子类型实例对象
var fn4 = new Fn4("FN4name",18)




// 组合继承方法
// 父类型构造函数
function Fn5(name) {
    this.name = name
}
// 父类型原型添加方法
Fn5.prototype.setName = function(name){
    this.name = name
}
// 子类型构造函数
function Fn6(name,age){
    // 使用call()调用父类型构造函数方法
    Fn5.call(this,name)
    this.age = age
}
// 子类型原型 = 父类型实例对象
Fn6.prototype = new Fn5()
// 修正子类型的constructor执行子类型构造函数
Fn6.prototype.constructor = Fn6
// 子类型原型添加方法
Fn6.prototype.setAge = function(age){
    this.age = age
}
// 创建子类型实例对象
var fn6 = new Fn6("FN6name",18)
// 使用父类型方法
fn6.setName("Fn6Name")
fn6.setAge(19)
console.log(fn6.name,fn6.age)


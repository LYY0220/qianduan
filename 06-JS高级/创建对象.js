// object创建对象
var p1 = new Object()
p1.name = "people1"
p1.age = 18
p1.setAge = function(age){ 
    this.age = age
}

// 字面量创建对象
var p2 = {
    name:"people2",
    age:18,
    setAge:function(age){
        this.age = age
    }
}

// 工厂模式创建对象
function addPeople1(name,age){
    var people = {
        name:name,
        age:age,
        setAge:function(age){
            this.age = age
        }
    }
    return people
}
var p3 = addPeople1("people3",18)

// 自定义构造函数模式
function addPeople2(name,age){
    this.name = name
    this.age = age
    this.setAge = function(age){
        this.age = age
    }
}
var p4 = new addPeople2("people4",18)

// 自定义构造函数 + 显示原型
function addpeople3(name,age){
    this.name = name
    this.age = age
}
addpeople3.prototype.setAge = function(age){
    this.age = age
}
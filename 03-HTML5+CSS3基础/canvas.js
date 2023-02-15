window.onload = function(){
    // 绘制填充的矩形，默认黑色
    var test1 = document.querySelector(".test1")
    var canvas1 = test1.getContext("2d")
    canvas1.fillStyle = "red";
    canvas1.fillRect(50,50,100,100)
    // 绘制矩形边框，默认1px实心黑色
    var test2 = document.querySelector(".test2") 
    var canvas2 = test2.getContext("2d")
    canvas2.strokeStyle = "red"
    canvas2.lineWidth = "5"
    canvas2.strokeRect(50,50,100,100)
    // 绘制透明矩形，指定部分边透明 
    var test3 = document.querySelector(".test3")
    var canvas3 = test3.getContext("2d")
    canvas3.clearRect(50,50,100,100)
    // 直线路径
    var test4 = document.querySelector(".test4")
    var canvas4 = test4.getContext("2d")
    canvas4.moveTo(50,50)
    canvas4.lineTo(150,50)
    canvas4.lineTo(100,120)
    canvas4.lineTo(50,50)
    canvas4.stroke()
    //曲线路径
    var test5 = document.querySelector(".test5")
    var canvas5 = test5.getContext("2d")
    canvas5.arc(100,100,50,0,270*Math.PI/180)
    canvas5.stroke()
}
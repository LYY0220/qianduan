// 动画封装

// 传入三个参数，对象、目标位置、回调函数
function animate(obj,target,callback){
    // 清除之前定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer)

    // 为对象创建一个动画属性名
    obj.timer = setInterval(function(){
        // 缓动动画，获取步长
        var step = (target - obj.offsetLeft) / 10
        // 保留整数
        step = step > 0 ? Math.ceil(step) : Math.floor(step)

        // 每过15毫秒运行一次，实现动画效果
        obj.style.left = obj.offsetLeft + step + 'px'

        // 达到指定位置停止运行
        if(obj.offsetLeft == target){
            clearInterval(obj.timer)

            //运行结束后，运行回调函数
            if(callback){
                callback()
            }
        }
    },15)
}
var log = console.log.bind(console)
        
var imageFromPath = function (path) {
    var img = new Image()
    img.src = path
    return img
}

var intersect = function (a, b) {
    var x = 0
    //上下接触返回1， 左右接触返回2， 同时接触(在角相撞)返回3
    if (b.y + b.image.height < a.y && b.y + b.image.height > a.y && b.x + b.image.width > a.x && b.x < a.x + a.image.width) {
        //撞到上边
        x++
    }
    if (b.y < a.y + a.image.height && b.y + b.image.height > a.y && b.x + b.image.width > a.x && b.x < a.x + a.image.width) {
        //撞到下边
        x++
    }
    if (b.speedX > 0 && b.x + b.image.width > a.x && b.x < a.x && b.y + b.image.height > a.y && b.y < a.y + a.image.height ) {
        //从左向右运动且撞到左边
        x += 2
    }
    if (b.speedX < 0 && b.x < a.x + a.image.width && b.x + b.image.width > a.x + a.image.width && b.y + b.image.height > a.y && b.y <= a.y + a.image.height) {
        //从右向左运动且撞到右边
        x += 2
    }
    return x
}

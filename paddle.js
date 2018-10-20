var Paddle = function () {
    var img = imageFromPath('paddle.png')
    var o = {
        image: img,
        x: 100,
        y: 280,
        speed: 5,
    }
    o.moveLeft = function(){
        o.x -= o.speed
        if (o.x < 0) {
            o.x = 0;
        }
    }
    o.moveRight = function () {
        o.x += o.speed
        if (o.x+o.image.width > 400) {
            o.x = 400 - o.image.width
        }
    }
    o.collide = function (ball) {
        return intersect(o, ball)
    }
    return o
}

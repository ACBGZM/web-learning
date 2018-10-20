var Ball = function () {
    var img = imageFromPath('ball.png')
    var o = {
        image: img,
        x: 100,
        y: 200,
        speedX: 2,
        speedY: 2,
        fired: false,
    }
    o.fire = function () {
        o.fired = true
    }
    o.move = function () {
        if (o.fired) {
            //log('move')
            if (o.x <= 0 || o.x + o.image.width > 400) {
                o.speedX = -o.speedX
            }
            if (o.y < 0) {
                o.speedY = -o.speedY
            }
            // move
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    return o
}

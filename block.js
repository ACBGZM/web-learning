var Block = function () {
    var img = imageFromPath('block.png')
    var o = {
        image: img,
        x: 10,
        y: 10,
        w: 50,
        h: 20,
        alive: true,
    }
    o.kill = function () {
        o.alive = false
    }
    o.collide = function (ball) {
        if (!o.alive) {
            return 0
        }
        return intersect(o, ball)
    }

    return o
}

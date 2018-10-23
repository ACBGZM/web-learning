var Block = function (position) {
    // position 格式如 [0, 0]
    var img = imageFromPath('block.png')
    var o = {
        image: img,
        x: position[0],
        y: position[1],
        w: 50,
        h: 20,
        alive: true,
        health: position[2] || 1,
    }
    o.hit = function () {
        o.health--
        console.log(o.health);
        
        if (o.health < 1) {
            o.alive = false
        }
    }
    o.collide = function (ball) {
        if (!o.alive) {
            return 0
        }
        return intersect(o, ball)
    }

    return o
}
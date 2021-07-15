let accY = 0
let accX = 0
let x = 2
let y = 2
basic.forever(function () {
    led.plot(x, y)
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    if (accX < -150 && x > 0) {
        x += -1
    } else if (accX > 150 && x < 4) {
        x += 1
    }
    if (accY < -150 && y > 0) {
        y += -1
    } else if (accY > 150 && y < 4) {
        y += 1
    }
    basic.pause(500)
    basic.clearScreen()
})

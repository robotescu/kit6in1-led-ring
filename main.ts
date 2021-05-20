input.onGesture(Gesture.TiltLeft, function () {
    servos.P2.setAngle(0)
})
input.onGesture(Gesture.TiltRight, function () {
    servos.P2.setAngle(90)
})
let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.showIcon(IconNames.Chessboard)
basic.forever(function () {
    strip.show()
    strip.rotate(1)
    basic.pause(200)
})

input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P13, 470)
    pins.analogWritePin(AnalogPin.P14, 0)
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    isB = 1
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 1)
    basic.pause(4800)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1200)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1120)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P9, 0)
    basic.pause(4750)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    isB = 0
})
let isB = 0
pins.setPull(DigitalPin.P15, PinPullMode.PullDown)
pins.setPull(DigitalPin.P16, PinPullMode.PullDown)
isB = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        pins.analogWritePin(AnalogPin.P8, 0)
        pins.analogWritePin(AnalogPin.P9, 500)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        pins.analogWritePin(AnalogPin.P8, 500)
        pins.analogWritePin(AnalogPin.P9, 0)
    } else {
        if (isB == 0) {
            pins.analogWritePin(AnalogPin.P8, 0)
            pins.analogWritePin(AnalogPin.P9, 0)
        }
    }
})

/**
 * keypad
 * 
 * pin8
 * 
 * pin16
 * 
 * pin13
 * 
 * pin14
 * 
 * pin0
 * 
 * pin1
 * 
 * pin2
 * 
 * motor
 * 
 * pin5
 * 
 * pin11
 * 
 * pin12
 * 
 * pin15
 */
function ame1 () {
    isB = 1
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P11, 1)
    basic.pause(3600)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P11, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(1300)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1200)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P11, 0)
    basic.pause(3550)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P11, 0)
    isB = 0
}
function ame2 () {
    isB = 1
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P11, 1)
    basic.pause(4800)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P11, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(1300)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1200)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P11, 0)
    basic.pause(4750)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P11, 0)
    isB = 0
}
let isB = 0
isB = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showString("c")
        pins.analogWritePin(AnalogPin.P5, 0)
        pins.analogWritePin(AnalogPin.P11, 500)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showNumber(0)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showString(".")
        pins.analogWritePin(AnalogPin.P5, 500)
        pins.analogWritePin(AnalogPin.P11, 0)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P5, 0)
        pins.analogWritePin(AnalogPin.P11, 0)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showNumber(1)
        ame1()
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showNumber(2)
        ame2()
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(3)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showNumber(4)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showNumber(5)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(6)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showNumber(7)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showNumber(8)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showNumber(9)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})

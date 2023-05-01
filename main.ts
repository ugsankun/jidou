function ame3 () {
    isB = 1
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 1)
    basic.pause(4900)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
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
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.digitalWritePin(DigitalPin.P10, 0)
    basic.pause(4800)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
    isB = 0
}
// keypad
// 
// pin8
// 
// pin16
// 
// pin13
// 
// pin14
// 
// pin0
// 
// pin1
// 
// pin2
// 
// motor
// 
// pin5
// 
// pin11
// 
// pin12
// 
// pin15
function ame1 () {
    isB = 1
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
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
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.digitalWritePin(DigitalPin.P10, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
    isB = 0
}
function ame4 () {
    isB = 1
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 1)
    basic.pause(4900)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
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
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.digitalWritePin(DigitalPin.P10, 0)
    basic.pause(4800)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
    isB = 0
}
function ame2 () {
    isB = 1
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 1)
    basic.pause(4900)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
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
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.digitalWritePin(DigitalPin.P10, 0)
    basic.pause(4800)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
    isB = 0
}
let isB = 0
isB = 0
let ispad = 0
basic.forever(function () {
    led.enable(false)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showString("c")
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showNumber(0)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showString(".")
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        ispad = 1
        basic.showNumber(1)
        music.ringTone(262)
        ame1()
        music.stopAllSounds()
        ispad = 0
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        ispad = 1
        basic.showNumber(2)
        music.ringTone(294)
        ame2()
        music.stopAllSounds()
        ispad = 0
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        ispad = 1
        basic.showNumber(3)
        music.ringTone(330)
        ame3()
        music.stopAllSounds()
        ispad = 0
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
        ispad = 1
        basic.showNumber(4)
        music.ringTone(330)
        ame4()
        music.stopAllSounds()
        ispad = 0
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
basic.forever(function () {
    if (ispad == 0) {
        if (input.buttonIsPressed(Button.A)) {
            isB = 1
            pins.analogWritePin(AnalogPin.P9, 0)
            pins.analogWritePin(AnalogPin.P10, 500)
        } else if (input.buttonIsPressed(Button.B)) {
            isB = 1
            pins.analogWritePin(AnalogPin.P9, 495)
            pins.analogWritePin(AnalogPin.P10, 0)
        } else if (isB == 1) {
            isB = 0
            pins.analogWritePin(AnalogPin.P9, 0)
            pins.analogWritePin(AnalogPin.P10, 0)
        }
    }
})

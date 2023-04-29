def on_button_pressed_a():
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    pins.digital_write_pin(DigitalPin.P7, 1)
    pins.digital_write_pin(DigitalPin.P6, 0)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P6, 0)
    pins.digital_write_pin(DigitalPin.P7, 0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global isB
    isB = 1
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P9, 1)
    basic.pause(4800)
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P9, 0)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P6, 1)
    pins.digital_write_pin(DigitalPin.P7, 0)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P6, 0)
    pins.digital_write_pin(DigitalPin.P7, 1)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P6, 0)
    pins.digital_write_pin(DigitalPin.P7, 0)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P8, 1)
    pins.digital_write_pin(DigitalPin.P9, 0)
    basic.pause(4750)
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P9, 0)
    isB = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

isB = 0
pins.set_pull(DigitalPin.P15, PinPullMode.PULL_DOWN)
pins.set_pull(DigitalPin.P16, PinPullMode.PULL_DOWN)
isB = 0

def on_forever():
    if pins.digital_read_pin(DigitalPin.P16) == 1:
        pins.analog_write_pin(AnalogPin.P8, 0)
        pins.analog_write_pin(AnalogPin.P9, 500)
    elif pins.digital_read_pin(DigitalPin.P15) == 1:
        pins.analog_write_pin(AnalogPin.P8, 500)
        pins.analog_write_pin(AnalogPin.P9, 0)
    elif isB == 0:
        pins.analog_write_pin(AnalogPin.P8, 0)
        pins.analog_write_pin(AnalogPin.P9, 0)
basic.forever(on_forever)

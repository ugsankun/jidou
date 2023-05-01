# keypad
# 
# pin8
# 
# pin16
# 
# pin13
# 
# pin14
# 
# pin0
# 
# pin1
# 
# pin2
# 
# motor
# 
# pin5
# 
# pin11
# 
# pin12
# 
# pin15
def ame1():
    global isB
    isB = 1
    pins.digital_write_pin(DigitalPin.P5, 0)
    pins.digital_write_pin(DigitalPin.P11, 1)
    basic.pause(3600)
    pins.digital_write_pin(DigitalPin.P5, 0)
    pins.digital_write_pin(DigitalPin.P11, 0)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P12, 1)
    pins.digital_write_pin(DigitalPin.P15, 0)
    basic.pause(1300)
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.digital_write_pin(DigitalPin.P15, 1)
    basic.pause(1200)
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.digital_write_pin(DigitalPin.P15, 0)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P5, 1)
    pins.digital_write_pin(DigitalPin.P11, 0)
    basic.pause(3550)
    pins.digital_write_pin(DigitalPin.P5, 0)
    pins.digital_write_pin(DigitalPin.P11, 0)
    isB = 0
def ame2():
    global isB
    isB = 1
    pins.digital_write_pin(DigitalPin.P5, 0)
    pins.digital_write_pin(DigitalPin.P11, 1)
    basic.pause(4800)
    pins.digital_write_pin(DigitalPin.P5, 0)
    pins.digital_write_pin(DigitalPin.P11, 0)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P12, 1)
    pins.digital_write_pin(DigitalPin.P15, 0)
    basic.pause(1300)
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.digital_write_pin(DigitalPin.P15, 1)
    basic.pause(1200)
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.digital_write_pin(DigitalPin.P15, 0)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P5, 1)
    pins.digital_write_pin(DigitalPin.P11, 0)
    basic.pause(4750)
    pins.digital_write_pin(DigitalPin.P5, 0)
    pins.digital_write_pin(DigitalPin.P11, 0)
    isB = 0
isB = 0
isB = 0

def on_forever():
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P0, 1)
    if pins.digital_read_pin(DigitalPin.P16) == 1:
        basic.show_string("c")
        pins.analog_write_pin(AnalogPin.P5, 0)
        pins.analog_write_pin(AnalogPin.P11, 500)
    elif pins.digital_read_pin(DigitalPin.P13) == 1:
        basic.show_number(0)
    elif pins.digital_read_pin(DigitalPin.P14) == 1:
        basic.show_string(".")
        pins.analog_write_pin(AnalogPin.P5, 500)
        pins.analog_write_pin(AnalogPin.P11, 0)
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        pins.analog_write_pin(AnalogPin.P5, 0)
        pins.analog_write_pin(AnalogPin.P11, 0)
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P1, 1)
    if pins.digital_read_pin(DigitalPin.P16) == 1:
        basic.show_number(1)
        ame2()
    elif pins.digital_read_pin(DigitalPin.P13) == 1:
        basic.show_number(2)
        ame2()
    elif pins.digital_read_pin(DigitalPin.P14) == 1:
        basic.show_number(3)
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 1)
    if pins.digital_read_pin(DigitalPin.P16) == 1:
        basic.show_number(4)
    elif pins.digital_read_pin(DigitalPin.P13) == 1:
        basic.show_number(5)
    elif pins.digital_read_pin(DigitalPin.P14) == 1:
        basic.show_number(6)
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    pins.digital_write_pin(DigitalPin.P2, 0)
    pins.digital_write_pin(DigitalPin.P8, 1)
    if pins.digital_read_pin(DigitalPin.P16) == 1:
        basic.show_number(7)
    elif pins.digital_read_pin(DigitalPin.P13) == 1:
        basic.show_number(8)
    elif pins.digital_read_pin(DigitalPin.P14) == 1:
        basic.show_number(9)
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
basic.forever(on_forever)

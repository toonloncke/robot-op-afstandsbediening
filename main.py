def my_function():
    radio.send_number(11)
    basic.show_leds("""
        . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
    """)
    basic.pause(500)
    basic.clear_screen()
Kitronik_Game_Controller.on_button_press(Kitronik_Game_Controller.ControllerButtonPins.FIRE1,
    Kitronik_Game_Controller.ControllerButtonEvents.DOWN,
    my_function)

def my_function2():
    radio.send_number(2)
    basic.show_leds("""
        . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
    """)
    basic.pause(500)
    basic.clear_screen()
Kitronik_Game_Controller.on_button_press(Kitronik_Game_Controller.ControllerButtonPins.RIGHT,
    Kitronik_Game_Controller.ControllerButtonEvents.CLICK,
    my_function2)

def on_received_number(receivedNumber):
    global snelheid
    if receivedNumber == 0:
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, snelheid)
    elif receivedNumber == 1:
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, snelheid)
    elif receivedNumber == 2:
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.RIGHT, snelheid)
    elif receivedNumber == 3:
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.REVERSE, snelheid)
    elif receivedNumber == 11:
        snelheid += 1
    elif receivedNumber == 12:
        snelheid += -1
    else:
        Kitronik_Move_Motor.stop()
radio.on_received_number(on_received_number)

def my_function3():
    radio.send_number(12)
    basic.show_leds("""
        . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
    """)
    basic.pause(500)
    basic.clear_screen()
Kitronik_Game_Controller.on_button_press(Kitronik_Game_Controller.ControllerButtonPins.FIRE2,
    Kitronik_Game_Controller.ControllerButtonEvents.DOWN,
    my_function3)

def my_function4():
    radio.send_number(0)
    basic.show_leds("""
        . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
    """)
    basic.pause(500)
    basic.clear_screen()
Kitronik_Game_Controller.on_button_press(Kitronik_Game_Controller.ControllerButtonPins.UP,
    Kitronik_Game_Controller.ControllerButtonEvents.CLICK,
    my_function4)

def my_function5():
    radio.send_number(3)
    basic.show_leds("""
        . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
    """)
    basic.pause(500)
    basic.clear_screen()
Kitronik_Game_Controller.on_button_press(Kitronik_Game_Controller.ControllerButtonPins.DOWN,
    Kitronik_Game_Controller.ControllerButtonEvents.CLICK,
    my_function5)

def on_button_pressed_b():
    radio.send_number(303)
input.on_button_pressed(Button.B, on_button_pressed_b)

def my_function6():
    radio.send_number(1)
    basic.show_leds("""
        . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
    """)
    basic.pause(500)
    basic.clear_screen()
Kitronik_Game_Controller.on_button_press(Kitronik_Game_Controller.ControllerButtonPins.LEFT,
    Kitronik_Game_Controller.ControllerButtonEvents.CLICK,
    my_function6)

snelheid = 0
radio.set_group(1256)
snelheid = 20

def on_forever():
    pass
basic.forever(on_forever)

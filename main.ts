Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendNumber(11)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, snelheid)
    } else if (receivedNumber == 1) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, snelheid / 2)
    } else if (receivedNumber == 2) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, snelheid / 2)
    } else if (receivedNumber == 3) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, snelheid)
    } else if (receivedNumber == 11) {
        eerste_snelheid += 1
    } else if (receivedNumber == 12) {
        eerste_snelheid += -1
    } else if (receivedNumber == 303) {
        Kitronik_Move_Motor.stop()
    } else {
        snelheid = 10
    }
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendNumber(12)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("" + (snelheid))
})
input.onButtonPressed(Button.A, function () {
    snelheid = 10
    radio.sendNumber(1213121)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(303)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
let snelheid = 0
radio.setGroup(1256)
let eerste_snelheid = 20

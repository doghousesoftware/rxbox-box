input.onButtonPressed(Button.A, function () {
    AMTaken = 1
    PMTaken = 0
    pins.digitalWritePin(DigitalPin.P1, 0)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "AM" && AMTaken == 0) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P1, 1)
        servos.P0.setAngle(180)
    }
    if (receivedString == "PM" && PMTaken == 0) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            . . # . .
            `)
        pins.digitalWritePin(DigitalPin.P2, 1)
        servos.P0.setAngle(180)
    }
})
input.onButtonPressed(Button.B, function () {
    PMTaken = 1
    AMTaken = 0
    pins.digitalWritePin(DigitalPin.P2, 0)
})
let PMTaken = 0
let AMTaken = 0
radio.setGroup(1)

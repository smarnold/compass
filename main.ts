let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 3 || degrees > 357) {
        basic.showString("N")
    } else if (degrees < 93 && degrees > 87) {
        basic.showString("E")
    } else if (degrees < 183 && degrees > 177) {
        basic.showString("S")
    } else if (degrees < 273 && degrees > 267) {
        basic.showString("W")
    } else {
        basic.showString("" + (degrees))
    }
})

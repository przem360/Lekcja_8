input.onButtonPressed(Button.A, function () {
    if (x == przeciwnik_x && y == przeciwnik_y) {
        brawo = 1
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        basic.pause(5000)
        control.reset()
    }
    if (x == 0 && y == 0) {
        led.toggle(x, y)
        x = 4
        y = 4
        led.toggle(x, y)
    } else {
        if (x > 0) {
            led.toggle(x, y)
            x += -1
            led.toggle(x, y)
        } else {
            led.toggle(x, y)
            y += -1
            x = 4
            led.toggle(x, y)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (x == przeciwnik_x && y == przeciwnik_y) {
        brawo = 1
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        basic.pause(5000)
        control.reset()
    }
    if (x == 4 && y == 4) {
        led.toggle(x, y)
        x = 0
        y = 0
        led.toggle(x, y)
    } else {
        if (x < 4) {
            led.toggle(x, y)
            x += 1
            led.toggle(x, y)
        } else {
            led.toggle(x, y)
            y += 1
            x = 0
            led.toggle(x, y)
        }
    }
})
function migaj (px: number, py: number) {
    mig_x = px
    mig_y = py
    while (true) {
        if (brawo == 0) {
            led.toggle(mig_x, mig_y)
            basic.pause(500)
        } else {
            led.unplot(mig_x, mig_y)
            return 0
        }
    }
}
let mig_y = 0
let mig_x = 0
let brawo = 0
let przeciwnik_y = 0
let przeciwnik_x = 0
let y = 0
let x = 0
x = 2
y = 2
przeciwnik_x = 2
przeciwnik_y = 2
while (x == przeciwnik_x && y == przeciwnik_y) {
    przeciwnik_x = randint(0, 4)
    przeciwnik_y = randint(0, 4)
}
led.toggle(x, y)
migaj(przeciwnik_x, przeciwnik_y)
basic.forever(function () {
	
})

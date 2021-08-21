let colom = 0
let row = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 160) {
            row = randint(0, 4)
            colom = randint(0, 4)
        } else {
        	
        }
        if (led.point(colom, row)) {
            led.unplot(colom, row)
            led.plot(colom + 1, row)
        } else {
        	
        }
    }
})

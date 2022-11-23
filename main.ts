let temp = 0
let light2 = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("temp:")
    if (temp <= 50) {
        temp += 1
    } else {
        temp = 0
    }
    basic.showString("humidity:")
    if (dht11_dht22.readData(dataType.humidity) <= 50) {
        temp += 1
    } else {
        temp = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("WIND:")
    basic.showNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    let x = 0
    temp = input.acceleration(Dimension.X)
    if (x < -300 || x < 300) {
        temp = input.temperature()
        basic.showNumber(temp)
    }
    light2 = input.lightLevel()
    if (input.lightLevel() <= 15) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.showNumber(light2)
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
    basic.showNumber(dht11_dht22.readData(dataType.humidity))
})
input.onButtonPressed(Button.B, function () {
    temp = input.acceleration(Dimension.X)
    temp = input.temperature()
    if (temp > 30) {
        basic.showString("hot")
    } else if (temp > 18) {
        basic.showString("cool")
    } else {
        basic.showString("cold")
    }
    light2 = input.lightLevel()
    if (light2 > 200) {
        basic.showString("bright")
    } else if (light2 > 100) {
        basic.showString("soso")
    } else {
        basic.showString("dark")
    }
})
basic.forever(function () {
	
})

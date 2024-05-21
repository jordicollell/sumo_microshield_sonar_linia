function davant () {
    microshield.MotorRun(microshield.Motors.M1, 50)
    microshield.MotorRun(microshield.Motors.M2, 50)
    alerta = 0
    sensor_davant_dret = pins.digitalReadPin(DigitalPin.P12)
    sensor_davant_esquerra = pins.digitalReadPin(DigitalPin.P13)
    while (sensor_davant_dret == 0 && (sensor_davant_esquerra == 0 && alerta == 0)) {
        sonar2 = sonar.ping(
        DigitalPin.P14,
        DigitalPin.P15,
        PingUnit.Centimeters
        )
        sensor_davant_esquerra = pins.digitalReadPin(DigitalPin.P12)
        sensor_davant_dret = pins.digitalReadPin(DigitalPin.P13)
        if (sonar2 > 2 && sonar2 < 25) {
            alerta = 1
        }
    }
    if (sensor_davant_dret == 1 || sensor_davant_esquerra == 1) {
        GIRAR_VINGUENT_DAVANT()
    } else {
        darrere()
    }
}
function GIRAR_VINGUENT_DAVANT () {
    microshield.MotorRun(microshield.Motors.M1, -70)
    microshield.MotorRun(microshield.Motors.M2, -70)
    basic.pause(800)
    índex = 0
    for (let índex = 0; índex <= 25; índex++) {
        microshield.MotorRun(microshield.Motors.M2, 50)
        microshield.MotorRun(microshield.Motors.M1, -50)
        basic.pause(60)
        microshield.MotorStop(microshield.Motors.M1)
        microshield.MotorStop(microshield.Motors.M2)
        basic.pause(60)
        sonar2 = sonar.ping(
        DigitalPin.P14,
        DigitalPin.P15,
        PingUnit.Centimeters
        )
        if (sonar2 > 2 && sonar2 <= 50) {
            darrere()
        }
        sensor_davant_esquerra = pins.digitalReadPin(DigitalPin.P12)
        sensor_davant_dret = pins.digitalReadPin(DigitalPin.P13)
        sensor_darrera_esquerra = pins.digitalReadPin(DigitalPin.P4)
        sensor_darrera_dret = pins.digitalReadPin(DigitalPin.P6)
        if (sensor_davant_dret == 1 || sensor_davant_esquerra == 1) {
            darrere()
        }
        if (sensor_darrera_dret == 1 || sensor_darrera_esquerra == 1) {
            davant()
        }
    }
    davant()
}
function darrere () {
    microshield.MotorRun(microshield.Motors.M1, -50)
    microshield.MotorRun(microshield.Motors.M2, -50)
    sensor_darrera_esquerra = pins.digitalReadPin(DigitalPin.P4)
    sensor_darrera_dret = pins.digitalReadPin(DigitalPin.P6)
    while (sensor_darrera_dret == 0 && sensor_darrera_esquerra == 0) {
        sensor_darrera_esquerra = pins.digitalReadPin(DigitalPin.P4)
        sensor_darrera_dret = pins.digitalReadPin(DigitalPin.P6)
    }
    GIRAR_VINGUENT_DARRERA2()
}
function GIRAR_VINGUENT_DARRERA2 () {
    microshield.MotorRun(microshield.Motors.M1, 73)
    microshield.MotorRun(microshield.Motors.M2, 73)
    basic.pause(800)
    índex = 0
    for (let índex = 0; índex <= 25; índex++) {
        microshield.MotorRun(microshield.Motors.M2, 50)
        microshield.MotorRun(microshield.Motors.M1, -50)
        basic.pause(60)
        microshield.MotorStop(microshield.Motors.M1)
        microshield.MotorStop(microshield.Motors.M2)
        basic.pause(60)
        sonar2 = sonar.ping(
        DigitalPin.P14,
        DigitalPin.P15,
        PingUnit.Centimeters
        )
        if (sonar2 > 2 && sonar2 <= 50) {
            darrere()
        }
        sensor_davant_esquerra = pins.digitalReadPin(DigitalPin.P12)
        sensor_davant_dret = pins.digitalReadPin(DigitalPin.P13)
        sensor_darrera_esquerra = pins.digitalReadPin(DigitalPin.P4)
        sensor_darrera_dret = pins.digitalReadPin(DigitalPin.P6)
        if (sensor_davant_dret == 1 || sensor_davant_esquerra == 1) {
            darrere()
        }
        if (sensor_darrera_dret == 1 || sensor_darrera_esquerra == 1) {
            davant()
        }
    }
    davant()
}
let sensor_darrera_dret = 0
let sensor_darrera_esquerra = 0
let índex = 0
let sonar2 = 0
let sensor_davant_esquerra = 0
let sensor_davant_dret = 0
let alerta = 0
microshield.MotorStop(microshield.Motors.M1)
microshield.MotorStop(microshield.Motors.M2)
pins.setPull(DigitalPin.P7, PinPullMode.PullNone)
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . #
    . . . . .
    . . . . .
    `)
while (pins.digitalReadPin(DigitalPin.P5) == 1 && pins.digitalReadPin(DigitalPin.P11) == 1) {
	
}
basic.clearScreen()
led.plot(2, 2)
basic.pause(2000)
led.enable(false)
davant()

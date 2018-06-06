serial.onDataReceived(serial.delimiters(Delimiters.NewLine), () => {
    OLED.showString(serial.readLine())
})
input.onButtonPressed(Button.A, () => {
    AlfonsoROBOT.control180Servo(AlfonsoROBOT.Servo.Servo5, 0)
    AlfonsoROBOT.control360Servo(AlfonsoROBOT.Servo.Servo6, AlfonsoROBOT.ServoDirection.clockwise, 100)
})
input.onButtonPressed(Button.B, () => {
    AlfonsoROBOT.control180Servo(AlfonsoROBOT.Servo.Servo5, 180)
    AlfonsoROBOT.control360Servo(AlfonsoROBOT.Servo.Servo6, AlfonsoROBOT.ServoDirection.anticlockwise, 100)
})
MuseIoT.initializeWifi()
OLED.init(32, 128)
basic.forever(() => {
    AlfonsoROBOT.motorOn(AlfonsoROBOT.Motors.Motor1, AlfonsoROBOT.MotorDirection.Forward, 100)
    AlfonsoROBOT.motorOn(AlfonsoROBOT.Motors.Motor2, AlfonsoROBOT.MotorDirection.Forward, 100)
    basic.pause(500)
    AlfonsoROBOT.motorOn(AlfonsoROBOT.Motors.Motor1, AlfonsoROBOT.MotorDirection.Backward, 100)
    AlfonsoROBOT.motorOn(AlfonsoROBOT.Motors.Motor2, AlfonsoROBOT.MotorDirection.Backward, 100)
    basic.pause(500)
})

serial.onDataReceived(serial.delimiters(Delimiters.NewLine), () => {
    OLED.showString(serial.readLine())
})
input.onButtonPressed(Button.AB, () => {
    AlfonsoIOT.setWifi("Alfonso", "12345678")
})
input.onButtonPressed(Button.A, () => {
    AlfonsoIOT.sendThingspeak("XXXXXXXXXXXXXX", 80, 0)
})
input.onButtonPressed(Button.B, () => {
    AlfonsoIOT.sendIFTTT(
    "XXXXXXXXXXXXXXXXXX",
    "email",
    0,
    0
    )
})
input.onPinPressed(TouchPin.P0, () => {
    AlfonsoIOT.sendBattery()
})
input.onPinPressed(TouchPin.P1, () => {
    AlfonsoIOT.sendTest()
})
input.onPinPressed(TouchPin.P2, () => {
    AlfonsoIOT.controlServo(5, 100)
})
basic.showIcon(IconNames.Angry)
OLED.init(32, 128)
AlfonsoIOT.initializeWifi()
basic.forever(() => {
	
})

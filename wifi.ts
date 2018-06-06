namespace AlfonsoIoT {
	let flag = true;
	
	// -------------- 1. Initialization ----------------
    //%blockId=AlfonsoIOT_initialize_wifi
    //%block="Initialize WiFi IoT"
	//% weight=90	
	//% blockGap=7	
    export function initializeWifi(): void {
        serial.redirect(SerialPin.P1,SerialPin.P2,BaudRate.BaudRate115200);
    }
	
	// -------------- 2. WiFi ----------------
    //% blockId=AlfonsoIOT_set_wifi
	//% block="Set wifi to ssid %ssid| pwd %pwd"   
	//% weight=80		
	//% blockGap=7	
    export function setWifi(ssid: string, pwd: string): void {
        serial.writeLine("(AT+wifi?ssid="+ssid+"&pwd="+pwd+")"); 
    }

	// -------------- 3. Cloud ----------------
    //% blockId=AlfonsoIOT_set_thingspeak
	//% block="Send ThingSpeak key %key| field1 %field1| field2 %field2"
	//% weight=70	
	//% blockGap=7	
    export function sendThingspeak(key: string, field1: number, field2: number): void {
        serial.writeLine("(AT+thingspeak?key=" + key+"&field1="+field1+"&field2="+field2+")"); 
    }
	
    //% blockId=muselab_set_ifttt
	//% block="Send IFTTT key %key|event_name %event|value1 %value1|value2 %value2"
	//% weight=60	
    export function sendIFTTT(key: string, eventname: string, value1: number, value2: number): void {
        serial.writeLine("(AT+ifttt?key=" + key+"&event="+eventname+"&value1="+value1+"&value2="+value2+")"); 
    }
	
	// -------------- 4. Others ----------------
	//% blockId=AlfonsoIOT_set_wifi_hotspot
	//% block="Set hotspot to ssid %ssid| pwd %pwd"   
	//% weight=58	
	//% blockGap=7	
    export function setWifiHotspot(ssid: string, pwd: string): void {
        serial.writeLine("(AT+wifi_hotspot?ssid="+ssid+"&pwd="+pwd+")"); 
    }
	
    //%blockId=AlfonsoIOT_start_server
    //%block="Start web listening"
	//% weight=55	
    export function startWebServer(): void {
		flag = true
		serial.writeLine("(AT+startWebServer)")
		while(flag) {
			serial.writeLine("(AT+write_sensor_data?p0=" + pins.analogReadPin(AnalogPin.P0) + "&p1=" + pins.analogReadPin(AnalogPin.P1) + "&p2=" + pins.analogReadPin(AnalogPin.P2) + ")")
			basic.pause(500)
			if(!flag)
				break;
		}
		
    }
	
	// -------------- 5. Advanced Wifi ----------------
	
	//%subcategory=More
    //%blockId=AlfonsoIOT_alfonso_mqtt
    //%block="Connect to Alfonso MQTT server"
	//% weight=44
	//% blockGap=7	
    export function connectAlfonsoMQTT(): void {
        serial.writeLine("(AT+startMQTT?host=13.58.53.42&port=1883&clientId=100&username=omlxmgsy&password=AoGUfQNPkeSH)");
		while(true) {
			serial.writeLine("(AT+write_sensor_data?p0=" + pins.analogReadPin(AnalogPin.P0) + "&p1=" + pins.analogReadPin(AnalogPin.P1) + "&p2=" + pins.analogReadPin(AnalogPin.P2) + ")")
			basic.pause(500)
		}
    }
	
	//%subcategory=More
	//% blockId=AlfonsoIOT_general_mqtt
	//% block="Connect MQTT server %host| port %port| client id %clientId| username %username| password %pwd"
	//% weight=43
	//% blockGap=7	
    export function connectgeneralMQTT(host: string, port: string, clientId: string, username: string, pwd: string): void {
        serial.writeLine("(AT+startMQTT?host="+host+"&port="+port+"&clientId="+clientId+"&username="+username+"&password="+pwd+")");
    }
	
	//%subcategory=More
    //%blockId=AlfonsoIOT_mqtt_publish
    //% block="MQTT publish topic %topic| payload %payload"
	//% weight=42	
	//% blockGap=7	
    export function mqttPublish(topic: string, payload: string): void {
        serial.writeLine("(AT+mqttPub?topic="+topic+"&payload="+payload+")");
    }	
	
	//%subcategory=More
    //%blockId=AlfonsoIOT_mqtt_subscribe
    //% block="MQTT subscribe topic %topic"
	//% weight=41	
    export function mqttSubscribe(topic: string): void {
        serial.writeLine("(AT+mqttSub?topic="+topic+")");
    }	
	
	// -------------- 6. General ----------------		

	//%subcategory=More
    //%blockId=AlfonsoIOT_battery
    //%block="Get battery level"
	//% weight=40
	//% blockGap=7		
	
    export function sendBattery(): void {
        serial.writeLine("(AT+battery)");
    }	
	
	//%subcategory=More
    //%blockId=AlfonsoIOT_version
    //%block="Get firmware version"
	//% weight=39	
	//% blockGap=7		
    export function sendVersion(): void {
        serial.writeLine("(AT+version)");
    }
	
	//%subcategory=More
    //%blockId=AlfonsoIOT_at
    //%block="Send AT command %command"
	//% weight=30	
	//% blockGap=7		
    export function sendAT(command: string): void {
        serial.writeLine(command);
		flag = false
    }
	
	//%subcategory=More
    //%blockId=AlfonsoIOT_test
    //%block="Send AT test"
	//% weight=20	
	//% blockGap=7		
    export function sendTest(): void {
        serial.writeLine("(AT+testing)");
    }
	
	//%subcategory=More
    //%blockId=AlfonsoIOT_deep_sleep
    //%block="Set deep sleep %second| second"
	//% weight=15	
    export function setDeepSleep(second: number): void {
        serial.writeLine("(AT+deepsleep?time="+second+")");
    }	

}

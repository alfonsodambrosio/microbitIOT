# AlfonsoIOT Micro:bit

A PXT library for Micro:bit IOT 

## Blocks

### 1. Initialize WiFi IoT 

Sets up the micro:bit WiFi IoT  used for the micro:bit.

```blocks
AlfonsoIoT.initializeWifi()
```

### 2. Set WiFi

Connect the Microbit WiFi IoT  to the WiFi (Home router)

```blocks
AlfonsoIoT.setWifi("muselab", "12345678")
```

Here we take "AlfonsoIOT" as router SSID and "12345678" as router password.


### 3. Set WiFi hotspot

Configure the Micro:bit WiFi IoT  as a hotspot.

```blocks
AlfonsoIoT.setWifiHotspot("muselab", "12345678")
```

For the hotspot, here we take "AlfonsoIOT" as SSID and "12345678" as password.


### 4. Connect to ThingSpeak

Upload data to ThingSpeak

```blocks
AlfonsoIoT.sendThingspeak("asdasdasdasdasdasd", 0, 0)
```

Here we take "Alfonso" as the ThingSpeak key, 0 as field1 value and 0 as field2 value.


### 5. Connect to IFTTT

Trigger the IFTTT cloud event such as email, sms and so on.

```blocks
    AlfonsoIoT.sendIFTTT(
    "Alfonso",
    "email",
    0,
    0
    )
```

Here we take "Alfonso" as IFTTT key, email as event name, 0 as value1 and 0 as value2.

## License

MIT

## Supported targets

* for PXT/calliope
* for PXT/microbit

(The metadata above is needed for package search.)


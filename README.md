FOR MAKING THIS PROJECT TO RUN ANY ENVIRONMENT THIS STEPS NEEDED TO BE FOLLOWED:
- INSTALL [RASPBIAN OS](https://www.raspberrypi.org/downloads/raspbian/) INTO A [RASPBERRY PI](http://bdspeedytech.com/index.php?route=product/product&product_id=2674&search=RASPBERRY+PI) AND INSTALL [MOSQUTTO](https://www.instructables.com/id/Installing-MQTT-BrokerMosquitto-on-Raspberry-Pi/) ON IT. OPEN A WEB SOCKET AT PORT 1900
- INSTALL [ANACONDA](https://www.anaconda.com/download/) FOR [PYTHON 3.5](https://repo.anaconda.com/archive/Anaconda3-5.3.1-Windows-x86_64.exe) OR GETTER ON YOUR DUMPER SYSTEM. INSTALL [PAHO.MQTT](https://anaconda.org/wheeler-microfluidics/paho-mqtt) AND [PYMYSQL](https://pypi.org/project/PyMySQL/) LIBARRY IN PYTHON.
- SETUP [ANGULAR](https://angular.io/guide/quickstart) ENVIRONMENT WITH [NGX-MQTT-CLIENT](https://www.npmjs.com/package/ngx-mqtt-client) AND THE ON TO THE CLIENT SYSTEM. [BUILD](https://github.com/extinctCoder/iotProject_2/blob/master/angular.md) THE ANGULAR PROJECT AND RUN IT INTO THE 4200 PORT
- CONFIGURE ARDUINO IDE TO ABLE TO WORK WITH [ESP8266](https://arduino-esp8266.readthedocs.io/en/2.4.2/) BOARDS. ADD [PUBSUB](https://github.com/knolleary/pubsubclient) LIBARRY INTO THE ANDUINO IDE. UPLOAD THE [SKETCH](https://github.com/extinctCoder/iotProject_2/blob/master/Arduino/iotProjectV2.01/iotProjectV2.01.ino)
  - BEFORE UPLOADING THE SKETCH GIVE YOUR SSID, SSID PASSWORD, AND MOSQUTTO BROKER IP IN THE SKETCH
- INTALL [XAMPP](https://www.apachefriends.org/download.html) INTO THE DUMPER SYSTEM FOR UPLOADING DATA INTO MYSQL. DB SCRIPT WILL BE FOUND IN THE PROJECT REPOSITARY. MAKE A DATABASE CALLED [iotProjectV2](https://github.com/extinctCoder/iotProject_2/blob/master/dataDumper/iotprojectv2.sql)

N.B.
- USE FIREFOX DEVELOPER EDITION FOR THE ANGULAR PROJECT.
  - IF YOU ARE USING CHROME THERE MAYBE [CROSS DOMAIN PERMISSION](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) ARE NEEDED TO BE GIVEN.
- FOR THE IDE CHOICES RECOMENDATIONS ARE
  - [PYCHARM PROFESSIONAL EDITION](https://www.jetbrains.com/pycharm/download/#section=windows), 
  - [WEBSTROME PROFESSIONAL EDITION](https://www.jetbrains.com/webstorm/download/#section=windows), 
  - [ARDUINO IDE](https://www.arduino.cc/en/Main/Software),
  - [CYBERDUCK](https://cyberduck.io/), 
  - [CMDER](http://cmder.net/)

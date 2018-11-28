#include <ESP8266WiFi.h>
#include <PubSubClient.h>

const char* ssid = "blackWeb";
const char* password = "01794175793";
const char* mqtt_server = "192.168.43.242";

WiFiClient espClient;
PubSubClient client(espClient);
String msg = "100.00";

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  randomSeed(micros());

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();

  if ((char)payload[0] == '1') {
      client.publish("iotProjectV2/force-update/data", (char*)msg.c_str());
  } 
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    String clientId = "ESP8266Client-";
    clientId += String(random(0xffff), HEX);
    if (client.connect(clientId.c_str())) {
      Serial.println("connected");
      client.subscribe("iotProjectV2/force-update/command");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void setup() {
  pinMode(BUILTIN_LED, OUTPUT);
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  update_raw();
  Serial.print("Publish message: ");
  Serial.println(msg);
  client.publish("iotProjectV2/live-update", (char*)msg.c_str());
  delay(1000);
}

void update_raw(){
  msg = String ( float( analogRead(A0) * (100.0 / 1023.0 )));
}


import paho.mqtt.client as mqtt
import pymysql.cursors
broker_address = "192.168.0.104"

live_data_chanel = "iotProjectV2/live-update"


def on_message(client, userdata, message):
    print("Message received: ", str(message.payload))
    print("Message topic: ", message.topic)
    print("Message qos: ", message.qos)
    print("Message retain flag: ", message.retain)
    try:
      with connection.cursor() as cursor:
        sql = "INSERT INTO `demo_data` (`id`, `data`, `time`) VALUES (NULL, %s, CURRENT_TIMESTAMP)"
        cursor.execute(sql, str(message.payload))
        connection.commit()
    except Exception as ex:
      print(ex)
    pass


def on_log(client, userdata, level, buf):
    print("Log: ", buf)
    pass


def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Mqtt client connected with broker")
        client.subscribe(live_data_chanel)
    else:
        print("Unable to connect with broker. Error code:", rc)


# Main Program

print("Welcome to iotProjectV2 dumper binary script ...")
print("Creating new instance of Mqtt client")
connection = pymysql.connect(host='127.0.0.1',
                             user='root',
                             password='',
                             db='iotprojectv2',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)
try:
  client = mqtt.Client()
  client.on_connect = on_connect
  client.on_message = on_message
  client.on_log = on_log
  print("Connecting to Mqtt broker")
  client.connect(broker_address)
  client.loop_forever()
except Exception as ex:
  print(ex)
  pass
finally:
  connection.close()
  pass


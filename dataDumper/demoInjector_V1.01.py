import paho.mqtt.client as mqtt
import time
import random
broker_address = "192.168.0.104"

live_chanel = "iotProjectV2/live-update"
force_data_chanel = "iotProjectV2/force-update/data"

data = 12


def on_publish(client, userdata, result):
    print("Client: ", client)
    print("User data: : ", userdata)
    print("Result: ", result)
    pass


def on_log(client, userdata, level, buf):
    print("Log: ", buf)
    pass


def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Mqtt client connected with broker")
        print("Preparing to send data")
    else:
        print("Unable to connect with broker. Error code: ", rc)
    pass


print("Welcome to iotProjectV2 injector binary script ...")
print("Creating new instance of mqtt client")
client = mqtt.Client()
client.on_connect = on_connect
client.on_publish = on_publish
client.on_log = on_log
print("Connecting to mqtt broker publisher script")
client.connect(broker_address)
client.loop_start()
count = 0
while 1:
    data = random.randint(1, 101)
    client.publish(live_chanel, data)
    client.publish(force_data_chanel, data)
    time.sleep(1)
    count = count + 1
    if count == 10:
        # time.sleep(5)
        count = 0

client.loop_stop()
client.disconnect()

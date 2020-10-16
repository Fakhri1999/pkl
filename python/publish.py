import os
import time
import sys
import paho.mqtt.client as mqtt
import json
from random import uniform
import sqlite3

sqliteConnection = sqlite3.connect('../database/portal-web.db')
cursor = sqliteConnection.cursor()
print("Connected to SQLite")
sqlite_select_query = "SELECT * from gateway;"
cursor.execute(sqlite_select_query)
records = cursor.fetchall()
ACCESS_TOKEN = records[0][2]
cursor.close()

THINGSBOARD_HOST = 'iotcloud.tujuhlangit.id'

# Data capture and upload interval in seconds
INTERVAL=2

sensor_data = {'temperature': 0, 'humidity': 0}

next_reading = time.time() 

client = mqtt.Client()

# Set access token
client.username_pw_set(ACCESS_TOKEN)

# Connect to ThingsBoard using default MQTT port and 60 seconds keepalive interval
client.connect(THINGSBOARD_HOST, 1883, 60)

client.loop_start()

try:
    while True:
        # humidity,temperature = dht.read_retry(dht.DHT22, 4)
        humidity = uniform(1.0, 100.0)
        temperature = uniform(1.0, 100.0)
        humidity = round(humidity, 2)
        temperature = round(temperature, 2)        
        print(u"Temperature: {:g} C, Humidity: {:g}%".format(temperature, humidity))
        #print(u"Temperature: {:g}\u00b0C, Humidity: {:g}%".format(temperature, humidity))
        sensor_data['temperature'] = temperature
        sensor_data['humidity'] = humidity

        # Sending humidity and temperature data to ThingsBoard
        client.publish('v1/devices/me/telemetry', json.dumps(sensor_data), 1)

        next_reading += INTERVAL
        sleep_time = next_reading-time.time()
        if sleep_time > 0:
            time.sleep(sleep_time)
except KeyboardInterrupt:
    pass

client.loop_stop()
client.disconnect()

#include <Adafruit_INA219.h>
#include <SPI.h>
#include <Ethernet.h>
#include <Wire.h> 


// Set the LCD address to 0x27 for a 16 chars and 2 line display

Adafruit_INA219 ina219;

byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED }; //MAC Address
float voltage;
float current;

int period = 10000; //interval simpan data ke db
unsigned long time_now = 0;

unsigned long byteCount = 0;
bool printWebData = true;  // set to false for better speed measurement

char server[] = "192.168.10.10";
IPAddress ip(192,168,10,5); //arduino IP
EthernetClient client; 

void setup() {
  Serial.begin(9600);
  ina219.begin();
  
  Ethernet.begin(mac, ip);
  Serial.print("Local IP: ");
  Serial.println(Ethernet.localIP());
  delay(1000);
}

void loop(){
  
  voltage = ina219.getBusVoltage_V();
  current = ina219.getCurrent_mA();
  String print_volt = "Volt: ";  print_volt += String(voltage); print_volt += " V";
  String print_curr = "curr: ";  print_curr += String(current); print_curr += " mA";
  if(millis() >= time_now + period){
    time_now += period;
    SendtoDB();
  } 
  int len = client.available();
  if (len > 0) {
        byte buffer[80];
        if (len > 80) len = 80;
        client.read(buffer, len);
        if (printWebData) {
          Serial.write(buffer, len); // show in the serial monitor (slows some boards)
        }
        byteCount = byteCount + len;
  } 
  
}

//insert data ke DB via injeksi control.php
void SendtoDB(){
   if (client.connect(server, 80)) {
    Serial.println("");
    Serial.println("connected");
    // Make a HTTP request:
    Serial.print("GET /ethernet/ina.php?voltage=");
    Serial.print(voltage);
    Serial.print("&current=");
    Serial.println(current);
    Serial.println("");
    
    client.print("GET /ethernet/ina.php?voltage=");     //YOUR URL
    client.print(voltage);
    client.print("&current=");
    client.print(current);
    client.print(" ");      //SPACE BEFORE HTTP/1.1
    client.print("HTTP/1.1");
    client.println();
    client.println("Host: 192.168.10.5");
    client.println("Connection: close");
    client.println ("Refresh: 5");
    client.println();
  } else {
    // if you didn't get a connection to the server:
    Serial.println("connection failed");
  }
 }

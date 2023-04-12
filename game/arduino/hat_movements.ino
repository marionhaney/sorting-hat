// 24301
// Marion Haney, 2023 Booth Game
// Include the Servo library 
#include <Servo.h> 
// Declare the Servo pin 
int servoPin2 = 2; 
int servoPin3 = 3; 
int servoPin4 = 4; 
int servoPin5 = 5; 

// Create a servo object 
Servo mouth1; 
Servo mouth2; 
Servo brows1; 
Servo brows2; 

// Storing messages from serial input
String hatMsg = "";
String hatMsgOld = "";

// Function to get the serial input message
void getMsg() {
  // read the string until new line (end character)
  while (Serial.available() == 0){
    hatMsg = Serial.readStringUntil("\n");
    if (hatMsg != hatMsgOld){
      // exit once we get a new message
      Serial.print("Message received: ");
      Serial.println(hatMsg);
      hatMsgOld = hatMsg;
      return;
    }
  }
}

// Function for eyebrows
void moveEyebrows() {
  int pos = 20;
  int n = 0;
  int del = 200;
  for (n = 0; n <= 2; n += 1) {
    for (pos = 20; pos <= 60; pos += 1) {
      brows1.write(pos);
      brows2.write(pos);
      delay(15);
    }
    delay(del);
    del += 100;
  }
  brows1.write(60);
  brows2.write(60);
}

// Function for mouth short
void moveMouthShort() {
  mouth1.write(5);
  mouth2.write(5);
  delay(250);
  mouth1.write(40);
  mouth2.write(40);
  delay(250);

  mouth1.write(5);
  mouth2.write(5);
  delay(250);
  mouth1.write(40);
  mouth2.write(40);
  delay(250);

}

// Function for mouth long
void moveMouthLong() {
  int n = 0;
  for (n = 0; n <= 2; n += 1){
    moveMouthShort();
  }
}



////// RUN THE MOVEMENTS //////
void setup() { 
  // We need to attach the servo to the used pin number 
  mouth1.attach(servoPin2); 
  mouth2.attach(servoPin3); 
  brows1.attach(servoPin4); 
  brows2.attach(servoPin5); 

  // Start the serial
  Serial.begin(9600);
}

void loop(){ 
  getMsg();
  if (hatMsg == "eyebrows\n"){
    Serial.println("Starting movements!"); 
    moveEyebrows();
  } else if (hatMsg == "mouthLong\n") {
    Serial.println("Starting movements!");
    moveMouthLong();
  } else if (hatMsg == "mouthShort\n") {
    Serial.println("Starting movements!");
    moveMouthShort();
  } else {
    // do nothing
  }

}
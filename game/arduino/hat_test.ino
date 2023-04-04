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

void setup() { 
   // We need to attach the servo to the used pin number 
   mouth1.attach(servoPin2); 
   mouth2.attach(servoPin3); 
   brows1.attach(servoPin4); 
   brows2.attach(servoPin5); 

}
void loop(){ 
   // Make servo2 go to 0 degrees 


      mouth1.write(5);
      mouth2.write(5);
      delay(1000); 
       
      mouth1.write(40);
      mouth2.write(40);
      delay(1000); 
      mouth1.write(5);
      mouth2.write(5);
      delay(1000); 
      
     brows1.write(75);
      brows2.write(75);
      delay(1000); 

      brows1.write(20);
      brows2.write(20);
      delay(1000); 
            
     brows1.write(75);
      brows2.write(75);
      delay(1000); 


 
}
  

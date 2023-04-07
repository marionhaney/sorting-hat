// eyebrow movements
const {Board, Servo} = require("johnny-five");
const board = new Board({
     port: "/dev/cu.usbmodem141301"
   });

board.on("ready", () => {
    // Declare the Servo pin 
    const servoPin4 = new Servo(4); 
    const servoPin5 = new Servo(5); 

    servoPin4.to(75);
    servoPin5.to(75);
    setTimeout(function() {
    }, 1000);

    servoPin4.to(20);
    servoPin5.to(20);
    setTimeout(function() {
    }, 1000);
          
    servoPin4.to(75);
    servoPin5.to(75);
    setTimeout(function() {
    }, 1000);
})
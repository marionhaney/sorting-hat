// eyebrow movements

let five = require("johnny-five");
let board = new five.Board();

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
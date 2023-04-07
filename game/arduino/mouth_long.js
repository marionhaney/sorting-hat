// long mouth movements

let five = require("johnny-five");
let board = new five.Board();

board.on("ready", () => {
    // Declare the Servo pin 
    const servoPin2 = new Servo(2); 
    const servoPin3 = new Servo(3); 

    servoPin2.to(5);
    servoPin3.to(5);
    setTimeout(function() {
    }, 1000);
     
    servoPin2.to(40);
    servoPin3.to(40);
    setTimeout(function() {
    }, 1000);

    servoPin2.to(5);
    servoPin3.to(5);
    setTimeout(function() {
    }, 1000);

    servoPin2.sweep();
    servoPin3.sweep();
    setTimeout(function() {
    }, 1000);
})

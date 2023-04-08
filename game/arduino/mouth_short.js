// short mouth movements
const {Board, Servo} = require("johnny-five");
const board = new Board({
     port: "/dev/cu.usbmodem141401"
});



board.on("ready", () => {
  // Declare the Servo pin 
  var servoPin2 = new Servo(2); 
  var servoPin3 = new Servo(3); 
  board.repl.inject({servoPin2});
  board.repl.inject({servoPin3});



  servoPin2.sweep();
  servoPin3.sweep();


});
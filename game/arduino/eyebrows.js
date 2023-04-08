// eyebrow movements
const {Board, Servo} = require("johnny-five");
const board = new Board({
     port: "/dev/cu.usbmodem141401"
});
  

board.on("ready", () => {
  // Declare the Servo pin 
  var servoPin4 = new Servo(4, type="continuous"); 
  var servoPin5 = new Servo(5, type="continuous"); 

  board.repl.inject({servoPin4});
  board.repl.inject({servoPin5});

  servoPin4.sweep([20,75]);
  servoPin5.sweep([20,75]);
});
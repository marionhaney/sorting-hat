// eyebrow movements
const {Board, Servos} = require("johnny-five");
const board = new Board({
     port: "/dev/cu.usbmodem141401"
});
  

board.on("ready", () => {
  // Declare the Servo pin 
  var servos = new Servos([4,5]);

  board.repl.inject({servos});
  servos.sweep([20,75,10]);

  // stop the servos after 3 seconds
  setTimeout(() => servos.stop(), 3000);
});
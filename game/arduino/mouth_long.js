// long mouth movements

const {Board, Servos} = require("johnny-five");
const board = new Board({
  port: "/dev/cu.usbmodem24401"
});

board.on("ready", () => {
  // Declare the Servo pin 
  var servos = new Servos([2,3]);

  board.repl.inject({servos});
  servos.sweep([5,40,10]);

  // stop the servos after 10 seconds
  setTimeout(() => servos.stop(), 10000);
  setTimeout(() => board.close(), 12000);
})

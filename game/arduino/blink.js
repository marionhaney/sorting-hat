const {Board, Led} = require("johnny-five");
//let five = require("johnny-five");
const board = new Board({
     port: "/dev/cu.usbmodem141401"
   });
board.on("ready", () => {
     const led = new Led(13);
     led.blink(500);
});


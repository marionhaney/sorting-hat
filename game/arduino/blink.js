const {Board, Led} = require("johnny-five");
let five = require("johnny-five");
new five.Board({ port: "/dev/tty.usbmodem24301" });
const board = new Board();
board.on("ready", () => {
     const led = new Led(13);
     led.blink(500);
});
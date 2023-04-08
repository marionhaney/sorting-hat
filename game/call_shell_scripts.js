//const { spawn } = require("child_process");
//const ls = spawn("node", ["game/arduino/eyebrows.js"]);

const { exec } = require("child_process");

function moveEyebrows() {
    exec("node game/arduino/eyebrows.js");
};


//moveEyebrows();

//exec("node game/arduino/eyebrows.js");

// launch the server and run the files in the views folder

/**
// Load Node modules
var express = require('express');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('game'));
// Port website will run on
app.listen(8080);
*/

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { SerialPort } = require('serialport'); 
const { ReadlineParser} = require('@serialport/parser-readline');
const port = new SerialPort(
    { baudRate: 9600 ,
        path: '/dev/cu.usbmodem141401'});
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));
// Read the port data
port.on("open", () => {
  console.log('serial port open');
});
parser.on('data', data =>{
  console.log('got word from arduino:', data);
});

app.get('/', (req, res) => {
     res.sendFile(__dirname + '/game/SortingQuiz.html');
})
app.use(express.static(__dirname + '/game'));
server.listen(8080, () => {
     console.log("listening on *:8080");
});
console.log("Web Server Started go to 'http://localhost:8080' in your Browser.");


// NOTES:
// http://localhost:8080
// npm start
// Ctrl + C to kill server.js
// installing packages to package.json: npm install PACKAGE_NAME --save
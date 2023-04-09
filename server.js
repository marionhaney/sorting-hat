// launch the server and run the files in the views folder
// HAT: '/dev/cu.usbmodem24301'
// BUTTONS: '/dev/cu.usbmodem24401'

const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const { SerialPort } = require('serialport'); 
const { ReadlineParser} = require('@serialport/parser-readline');


// port for the buttons
const portButtons = new SerialPort(
    { baudRate: 9600 ,
          path: '/dev/cu.usbmodem24401'}); // might need to change path-- check arduino
const parserButtons = portButtons.pipe(new ReadlineParser({ delimiter: '\n' }));
// open the port for buttons
portButtons.on("open", () => {
     console.log('serial port for the buttons open');
});



// port for the hat
const portHat = new SerialPort(
     { baudRate: 9600 ,
          path: '/dev/cu.usbmodem24301'}); // might need to change path-- check arduino
const parserHat = portHat.pipe(new ReadlineParser({ delimiter: '\n'}));
// open the port for the hat
portHat.on("open", () => {
     console.log('serial port for the hat open');
     let lastMsg;
     io.on("connection", socket => {
          socket.emit("connected");
          parserHat.on("data", data => {
               let lastMsg;
               if (lastMsg != data) {
                    console.log("Sending to hat: ", data);
                    socket.emit("data", data);
               };
               lastMsg = data;
          });

     });
});





app.get('/', (req, res) => {
     res.sendFile(__dirname + '/game/SortingQuiz.html');
})
app.use(express.static(__dirname + '/game'));


// set the parser for the buttons input data and connect the socket for sending the hat messages
io.on('connection', function(socket) {
     console.log('A user connected');
  
     // Whenever someone disconnects this piece of code executed
     /* TODO: when we refresh the page (restart the game) the button presses double
     each time. parser.on registers twice, seems like a connection is not closing when we refresh
     how can we close the connection properly?
     */
     socket.on('disconnect', function () {
        console.log('A user disconnected');
     });

     
     parserButtons.on('data', function(data) {
    
          //console.log('Received data from port: ' + data);
          
          io.emit('button_press', data);
          
     });

});



http.listen(8080, () => {
     console.log("listening on *:8080");
});
console.log("Web Server Started go to 'http://localhost:8080' in your Browser.");



// NOTES:
// http://localhost:8080
// npm start
// Ctrl + C to kill server.js
// installing packages to package.json: npm install PACKAGE_NAME --save
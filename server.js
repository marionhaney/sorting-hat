// launch the server and run the files in the public folder

// Load Node modules
var express = require('express');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
app.listen(8080);

// http://localhost:8080/2023BoothFormat.html
// npm start
// Ctrl + C to kill server.js
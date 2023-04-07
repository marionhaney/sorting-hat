// launch the server and run the files in the views folder
// Load Node modules
var express = require('express');

/**
// Raspberry Pi Input modules & input listener for LED buttons
// set each button to the corresponding keypress
var Gpio = require('onoff').Gpio;

const ans1 = new Gpio( '49', 'in', 'both' ); // 1
const ans2 = new Gpio( '50', 'in', 'both' ); // 2
const ans3 = new Gpio( '51', 'in', 'both' ); // 3
const ans4 = new Gpio( '52', 'in', 'both' ); // 4

// Raspberry Pi button event listener
// listen for pin voltage change
ans1.watch( ( err, value ) => {
    if( err ) {
      console.log( 'Error', err );
    }
  
    // log pin value (0 or 1)
    console.log( 'Pin value for Answer 1', value );
} );

ans2.watch( ( err, value ) => {
    if( err ) {
      console.log( 'Error', err );
    }
  
    // log pin value (0 or 1)
    console.log( 'Pin value for Answer 2', value );
} );

ans3.watch( ( err, value ) => {
    if( err ) {
      console.log( 'Error', err );
    }
  
    // log pin value (0 or 1)
    console.log( 'Pin value for Answer 3', value );
} );

ans4.watch( ( err, value ) => {
    if( err ) {
      console.log( 'Error', err );
    }
  
    // log pin value (0 or 1)
    console.log( 'Pin value for Answer 4', value );
} );
*/

// Initialise Express
var app = express();
// Render static files
app.use(express.static('game'));
// Port website will run on
app.listen(8080);

// NOTES:
// http://localhost:8080/SortingQuiz.html
// npm start
// Ctrl + C to kill server.js
// installing packages to package.json: npm install PACKAGE_NAME --save
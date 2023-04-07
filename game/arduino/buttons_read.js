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
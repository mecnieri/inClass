const os = require('os')
const dateFormatter = require('./date_formatter');
let now = new Date();

const Circle = require('./circle.js');
let c1 = new Circle(2);

console.log(`Platform: ${os.platform()}`);
console.log(`Architecture:  ${os.arch()}`);
console.log('Current date: ' + dateFormatter.formatDate(now, '/'));
console.log('Current time: ' + dateFormatter.formatTime(now, ':'));

console.log('Area of circle is: '+ c1.getArea());

const EventEmitter = require('events');

class StudentEvent extends EventEmitter {}

const studentEvent = new StudentEvent();

studentEvent.on('register', () => {
  console.log("Welcome to our app");
});

studentEvent.emit('register');

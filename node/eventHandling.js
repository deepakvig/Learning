var events = require('events')
var eventEmitter = new events.EventEmitter();

function mainLoop() {
  console.log('Starting application');
  eventEmitter.emit('ApplicationStart');

  console.log('Running application');
  eventEmitter.emit('ApplicationRun');

  console.log('Stopping Application');
  eventEmitter.emit('ApplicationStop');
}

function onApplicationStart(){
  console.log('Handling Application Start Event');
}

function onApplicationRun(){
  console.log('Handling Application Run Event');
}

function onApplicationStop(){
  console.log('Handling Applicaton Stop Event');
}

eventEmitter.on('ApplicationStart', onApplicationStart);
eventEmitter.on('ApplicationRun', onApplicationRun);
eventEmitter.on('ApplicationStop', onApplicationStop);

mainLoop();

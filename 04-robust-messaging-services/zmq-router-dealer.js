'use strict';

const 
	zmq = require('zmq'),
	router = zmq.socket('router'),
	dealer = zmq.socket('dealer');
	
router.on('message', function(){
	let frames = Array.prototype.slice.call(null, arguments);
	dealer.send(frames);
});

dealer.on('message',function(){
	let frames = Array.prototype.slice.call(null, arguments);
	router.send(frames);
});
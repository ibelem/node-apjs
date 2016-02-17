'use strict';

const
	zmq = require('zmq'),
	puller = zmq.socket('pull');

puller.on('message', function(data){
	let job = JSON.parse(data.toString());
	//
});
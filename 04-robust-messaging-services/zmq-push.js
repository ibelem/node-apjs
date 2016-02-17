'use strict';

const
	zmq = require('zmq'),
	pusher = zmq.socket('push');

for(let i=0; i<10; i++){
	pusher.send(JSON.stringify({
		details: 'details about the job'
	}));
}
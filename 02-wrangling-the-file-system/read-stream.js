'use strict'
/* global process */
const fs = require('fs'), stream = fs.createReadStream(process.argv[2]);

stream.on('data', function(chunk){
	process.stdout.write(chunk);
});

stream.on('error', function(err){
	//throw err;
	//console.log(err);
	process.stdout.write('Error: ' + err.message + '\n');
});
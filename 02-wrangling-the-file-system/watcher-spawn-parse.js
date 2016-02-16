/* global process */
"use strict"
const fs = require('fs'), spawn = require('child_process').spawn, filename = process.argv[2];

if(!filename) {
	throw Error('Please specify a file to watch.');
}

fs.watch(filename, function(){
	let ls = spawn('ls', ['-lh', filename]), output = '';
	
	ls.stdout.on('data', function(chunk){
		output += chunk.toString();
	});
	
	ls.on('close', function(){
		let parts = output.split(/\s+/);
		console.dir([parts[0], parts[4], parts[5], parts[6], parts[7], parts[8]])
	});
});

console.log('Now watching ' + filename + ' for changes');
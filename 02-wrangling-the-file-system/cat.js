#!/usr/bin/env node --harmony
/* global process */
'use strict'
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);
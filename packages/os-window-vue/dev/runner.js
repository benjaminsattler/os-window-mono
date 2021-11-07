#!/usr/bin/env node

const hoistedInclude = require('hoisted-include');

const connect = require('connect');
const serveStatic = require('serve-static');
const http = require('http');

process.chdir(`${__dirname}/../`);
const port = process.argv[2] || 8000;
const app = connect();

app.use('/hoist/', hoistedInclude(['./', '../../'], '/hoist/'));
app.use(serveStatic('./'), { index: ['index.html'] });

http.createServer(app).listen(port);

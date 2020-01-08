const express = require('express');
const server =  express();

const routes = require('./router');

server.use(routes);

server.listen(3333);
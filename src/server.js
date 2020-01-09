const express = require('express');
const server =  express();
const mongoose = require('mongoose');
const routes = require('./routes');


mongoose.connect('mongodb+srv://tinder:tinder123@cluster0-7uu3i.mongodb.net/tinder?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
server.use(express.json());
server.use(routes);

server.listen(3333);
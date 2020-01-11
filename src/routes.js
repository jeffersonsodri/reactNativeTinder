const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController')

const routes = express.Router();
routes.get('/', (req, res) => {
    return res.send('Olá, Mundo!!');
})

routes.post('/devs', DevController.store);

routes.post('/devs/:devID/likes', LikeController.store);

module.exports = routes;
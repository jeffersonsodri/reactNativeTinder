const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    return res.send('Olá, Mundo!!');
})

module.exports = router;
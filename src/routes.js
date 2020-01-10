const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    return res.send('Olá, Mundo!!');
})

router.post('/devs', (req, res) => {
    return res.json(req.body);
});

module.exports = router;
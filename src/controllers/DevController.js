const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async  store(req, res) {
        const {username} = req.body.username;
        console.log(req.body.username);

        //Vendo de so usuário existe na base
        const userExists = await Dev.findOne({ user: username});

        if(userExists){
            return res.json(userExists);
        }
        
        const response = await axios.get(`https://api.github.com/users/${username}`)

        const {name, bio, avatar_url: avatar} =  response.data;


        await dev = await Dev.create({
            name,
            user : username,
            bio,
            avatar
        });

        return res.json(dev);

    }

};
const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async  store(req, res) {
        const { username } = req.body;

        //Vendo de so usuário existe na base
        const userExists = await Dev.findOne({ user: username});

        if(userExists){
            return res.json(userExists);
        }
        
        const response = await axios.get(`https://api.github.com/users/${username}`)

        const { name, bio, avatar_url: avatar} =  response.data;


        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return res.json(dev);

    },


    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        
        const users = await Dev.find({
            $and : [
                { _id: { $ne : user} }, // Not Equals
                { _id: { $nin: loggedDev.likes}}, //Not In
                { _id: { $nin: loggedDev.dislikes}}, //Not in
            ]
        });
        
        
        return res.json(users);
    }

};

// Index, Show, Store, Updated, Delete
const Dev =  require('../models/Dev');

module.exports = {
    async store(req, res){

        // console.log(req.params.devId);
        // console.log(req.headers.user);

        const { devId } = req.params;
        const { user }  = req.headers;
        
        //buscar os models dos Ids no banco de dados
        
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);
        
        if(!targetDev) {
            return req.status(400).json({Erro: 'Dev no exists'});
        }

        //Verifica se existe um like do usuário que ele está tentando dar like
        if(targetDev.likes.includes(loggedDev._id) ){
            console.log('Deu Math');
        }
        else {
            loggedDev.likes.push(targetDev._id);
    
            await loggedDev.save();
        
        }
        return res.json(loggedDev);

    }
};


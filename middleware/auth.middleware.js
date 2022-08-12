const {Token} = require('../models/Token')

const auth = (req, res, next) => {

    
    Token.find({ token: 'apikey '+req.headers.apikey}, (err, data) => {
        
        if(data.length > 0){
            
            next()
        }else{
            res.status(401).send({message: "Unauthenticated"})
        }
    })
    
}


module.exports = {auth}
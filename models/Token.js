const mongoose = require('mongoose');


const Token = mongoose.model('Token',{
    token:{
        type: String,
        required:true
    }
})


module.exports = { Token }
const mongoose = require('mongoose');

const variant = new mongoose.Schema({
    sku:{
        type:String,
        required:true
    },
    specification:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const Product = mongoose.model('Product', {
    reference:  {
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    variants:[variant]
})


module.exports = { Product };
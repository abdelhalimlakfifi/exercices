const {Product} = require('../models/Product')

const getProducts = (req, res) => {
    Product.find({},  (err, data) => {
        if(!err){
            res.send(data);
        }else{
            res.status(502).json({code: 502, message:"Please try again"});
        }
    })
}

const postProduct = (req, res) => {
    const product = new Product(req.body);
    console.log(product);
    product.save((err, data) => {
        if(!err){
            res.status(200).json({code: 200,  message:"product added succefully", pr:product});
        }else{
            res.status(502).json({code: 502, message:"Please try again"});
        }
    })
    
}

const deleteProduct = (req, res) => {
    Product.findByIdAndRemove(req.params.product_id, (err, data) => {
        if(!err){
            if(data){
                res.status(200).json({code: 200, message:"product deleted"});
            } else {
                res.status(404).json({code: 404, message:"product not found"});
            }
        } else {
            res.status(502).json({code: 502, message:"Please try again"});
        }
    })
}

const updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.product_id, { $set: req.body}, {new:true}, (err, data) => {
        if(!err){
            if(data){
                res.status(200).json({code: 200, message:"product updated"});
            }else{
                res.status(404).json({code: 404, message:"Product not found"});
            }
        } else {
            res.status(502).json({code: 502, message:"Please try again"});
        }
    })
}

const getVariants = (req, res) => {

    Product.findById(req.params.product_id, (err, data) => {
        if(!err){
            if(data){
                res.send(data.variants)
            }else{
                res.status(404).json({code: 404, message:"Product not found"});
            }
        }else {
            res.status(502).json({code: 502, message:"Please try again"});
        }
    })
}

const variant = (req, res) => {
    Product.findById(req.params.product_id, (err, data) => {
        if(!err){
            const results = data.variants.filter(v => {
                
                return v._id == req.params.variant_id
            });
            if(results){
                res.send(results);
            }else{
                res.status(404).json({code: 404, message:"Variant not found"});
            }
        }else{
            res.status(502).json({code: 502, message:"Please try again"});
        }
    })
}

const getProduct = (req,res) => {
    Product.findById(req.params.product_id, (err, data) => {
        if(!err){
            if(data){
                res.send(data);
            }else{
                res.status(404).json({code: 404, message:"product not found"});
            }
        }else{
            res.status(502).json({code: 502, message:"Please try again"});
        }
    })
}

module.exports = {getProducts, getProduct, postProduct, deleteProduct, updateProduct, getVariants, variant}
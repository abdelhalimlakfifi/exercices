const express = require('express');
const router = express.Router();
const {addProductVallidation} = require('../validation/products/product.validation')
const { getProducts, getProduct, postProduct, deleteProduct, updateProduct,getVariants,variant } = require('../controllers/productsController')

const { auth } = require('../middleware/auth.middleware')

router.get('/api/products', auth, getProducts)

router.get('/api/product/:product_id', auth, getProduct)


router.post('/api/product', auth, addProductVallidation, postProduct)

router.delete('/api/product/:product_id', auth, deleteProduct)

router.patch('/api/product/:product_id', auth, updateProduct)


router.get('/api/product/:product_id/variants', auth, getVariants)

router.get('/api/product/:product_id/variants/:variant_id', auth, variant);





module.exports = router;


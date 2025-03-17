const express= require('express');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/products.controllers');
const router =express.Router();  // express is needed to be imported to use the router package that is used to defining the routes

router.get('/',getProducts)
router.get('/:id',getProduct)
router.post('/',createProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports = router;
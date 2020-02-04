const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
    cb(null, './upload')
},
filename: function(req, file, cb){
    cb(null, file.originalname)
}
})
const upload = multer({storage})

const Router = express.Router();
const productController = require('../controllers/product');



Router
.get('/sort/:param', productController.sortProduct)
.get('/:id_product',  productController.productDetail)
.post('/', upload.single('image'), productController.insertProduct)
.patch('/:id_product',upload.single('image'), productController.updateProduct)
.delete('/:id_product', productController.deleteProduct)
.get('/search/:search', productController.searchProduct)

module.exports = Router;
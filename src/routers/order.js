const express = require('express');

const Router = express.Router();
const orderController = require('../controllers/order');

Router
// BIKIN LINK DENGAN METHOD NYA POST
// LINK ITU DIKIRIMIN DATA BENTUKNYA RAW DI POSTMAN
/*
    CONTOH DATA 
    {
        "product_id" : 1
        "qty" : 3
    }

    product_id untuk tentuin productnya berdasarkan kolom id di table product
    qty adalah contoh jumlah nya yang dibeli user 
*/

// pagination
// .get('/', orderController.pageOrder)
// .get digunakan untuk menampilkan data
.get('/', orderController.getOrder)
// .post untuk melakukan order/product

// .post('/', orderController.insertOrder) melakukan eksekusi terhadap function insertOrder yang berada pada file controllers/order
.post('/', orderController.insertOrder)


module.exports = Router;
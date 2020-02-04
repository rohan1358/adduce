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

// .get('/', orderController.pageOrder)
.post('/', orderController.insertOrder)
.get('/', orderController.getOrder)


module.exports = Router;
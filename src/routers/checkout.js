const express = require('express');

const Router = express.Router();
const checkoutController = require('../controllers/checkout');

Router
.post('/', checkoutController.checkoutOrder) // localhost:8080/api/v1/checkout

module.exports = Router;
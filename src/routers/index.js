const express = require('express');
const product = require('./product');
const category = require('./category');
const user = require('./user')
const order = require('./order')

const Router = express.Router();

Router.use('/product', product);
Router.use('/category', category);
Router.use('/user', user);
Router.use('/order', order);



Router.use
module.exports = Router;
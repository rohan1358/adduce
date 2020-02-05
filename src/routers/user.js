const express = require('express');

const Router = express.Router();
const userController = require('../controllers/user');

Router
.get('/', userController.getUser)
.get('/:id_user',  userController.userDetail)
.post('/:id_user', userController.updateUser)
.post('/', userController.insertUser)

module.exports = Router;
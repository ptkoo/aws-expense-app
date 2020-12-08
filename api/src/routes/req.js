const express = require('express');
const reqRouter = express.Router();
const reqController = require('../controllers/req')
const authController = require('../controllers/authController')


reqRouter.use(authController.isLoggedIn)
//Routes
 
reqRouter
    .route('/')
    .get(reqController.getAllReqs)

module.exports = reqRouter;
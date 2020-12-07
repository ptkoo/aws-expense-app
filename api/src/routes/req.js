const express = require('express');
const reqRouter = express.Router();
const reqController = require('../controllers/req')
const authController = require('../controllers/authController')

//Routes
reqRouter
    .route('/')
    .get(authController.protect, reqController.getAllReqs)

module.exports = reqRouter;
const express = require('express');
const paymentRouter = express.Router();
const paymentController = require('../controllers/payment.js')
const authController = require('../controllers/authController')


// paymentRouter.use(authController.isLoggedIn)
//Routes
paymentRouter
    .route('/')
    .post(authController.isLoggedIn,paymentController.postPayment)

module.exports = paymentRouter;
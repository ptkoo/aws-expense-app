const express = require('express');
const reqRouter = express.Router();
const reqController = require('../controllers/req')
const authController = require('../controllers/authController')


reqRouter.use(authController.isLoggedIn)
//Routes
 
reqRouter
    .route('/')
    .get(reqController.getAllReqs)

reqRouter
    .route('/approve')
    .get(reqController.getApproveReqs)

reqRouter
    .route('/verify')
    .get(reqController.getVerifyReqs)

reqRouter
    .route('/recommend')
    .get(reqController.getRecommendReqs)

module.exports = reqRouter;
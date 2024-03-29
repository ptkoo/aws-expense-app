const express = require('express');
const travelReqRouter = express.Router();
const travelReqController = require('../controllers/travelRequests')
const authController = require('../controllers/authController')

travelReqRouter.use(authController.isLoggedIn)
//Routes
travelReqRouter
    .route('/')
    .post(travelReqController.createTravelReq)
    .get(travelReqController.getAllTravelReqs)

travelReqRouter
    .route('/:id')
    .get(travelReqController.getTravelReq)
    .patch(travelReqController.updateTravelReq)
    .delete(travelReqController.deleteTravelReq)

module.exports = travelReqRouter;
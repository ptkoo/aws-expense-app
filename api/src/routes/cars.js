const express = require('express');
const carRouter = express.Router();
const carController = require('../controllers/cars')
const authController = require('../controllers/authController')


//carRouter.use(authController.isLoggedIn)
//Routes
carRouter
    .route('/')
    .post(carController.createCar)
    .get(authController.protect, carController.getAllCars)

carRouter
    .route('/:id')
    .get(carController.getCar)
    .patch(carController.updateCar)
    .delete(authController.protect, authController.restrictTo('Manager'), carController.deleteCar)

module.exports = carRouter;
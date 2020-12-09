const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/users')
const authController = require('../controllers/authController')

userRouter.use(authController.isLoggedIn)
//Routes
userRouter
    .post('/signup', authController.createUser)
    .post('/login', authController.login)
    .patch('/updatePassword', authController.protect, authController.updatePassword)

userRouter
    .route('/')
    .get(userController.getAllUsers)

userRouter
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = userRouter;

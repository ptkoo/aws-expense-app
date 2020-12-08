const express = require('express');
const reimbursementRouter = express.Router();
const reimbursementController = require('../controllers/reimbursements')
const authController = require('../controllers/authController')

reimbursementRouter.use(authController.isLoggedIn)
//Routes
reimbursementRouter
    .route('/')
    .post(reimbursementController.createReimbursement)
    .get(reimbursementController.getAllReimbursements)

reimbursementRouter
    .route('/:id')
    .get(reimbursementController.getReimbursement)
    .patch(reimbursementController.updateReimbursement)
    .delete(reimbursementController.deleteReimbursement)

module.exports = reimbursementRouter;
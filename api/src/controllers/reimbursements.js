const Reimbursement = require('../models/reimbursements')
const APIFeatures = require('../utils/apiFeatures')
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


exports.createReimbursement = catchAsync(async (req, res, next) => {
    req.body.requestorId = req.user.id
    const reimbursement = await Reimbursement.create(req.body)

        res.status(201).json({
            status: 'success',
            data: {
                reimbursement
            }
        })
})

exports.getAllReimbursements = catchAsync(async (req, res, next) => {
 
        const features = new APIFeatures(Reimbursement.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();

        const reimbursement = await features.query
        
        res.status(200).json({
            status: 'success',
            data: {
                reimbursement
            }
        })
})

exports.getReimbursement = catchAsync(async (req, res, next) => {
    
        const reimbursement = await Reimbursement.findById(req.params.id)
        
        if (!reimbursement) {
    return next(new AppError('No req found with that ID', 404))
    }

        res.status(200).json({
            status: 'success',
            data: {
                reimbursement
            }
        })
})

exports.updateReimbursement = catchAsync(async (req, res, next) => {
    const _id = req.params.id

    
        const reimbursement = await Reimbursement.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: false
        })

        if (!reimbursement) {
    return next(new AppError('No req found with that ID', 404));
    }
        
        res.status(200).json({
            status: 'success',
            data: {
                reimbursement
            }
        })    
})

exports.deleteReimbursement = catchAsync(async (req, res, next) => {
    const _id = req.params.id

    
        const reimbursement = await Reimbursement.findByIdAndDelete(_id)
        
        if (!reimbursement) {
    return next(new AppError('No req found with that ID', 404));
    }

        res.status(204).json({
            status: 'success',
            data: null
        })
})
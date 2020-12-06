const User = require('../models/users')
const jwt = require('jsonwebtoken');
const APIFeatures = require('../utils/apiFeatures')
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllUsers = catchAsync(async (req, res, next) => {
 
        const features = new APIFeatures(User.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();

        const user = await features.query
        
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
})

exports.getUser = catchAsync(async (req, res, next) => {
    
        const user = await User.findById(req.params.id)
        
        if (!user) {
    return next(new AppError('No user found with that ID', 404))
    }

        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
})

exports.updateUser = catchAsync(async (req, res, next) => {
    const _id = req.params.id

    
        const user = await User.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: false
        })

        if (!user) {
    return next(new AppError('No user found with that ID', 404));
    }
        
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })    
})

exports.deleteUser = catchAsync(async (req, res, next) => {
    const _id = req.params.id

    
        const user = await User.findByIdAndDelete(_id)
        
        if (!user) {
    return next(new AppError('No user found with that ID', 404));
    }

        res.status(204).json({
            status: 'success',
            data: null
        })
})
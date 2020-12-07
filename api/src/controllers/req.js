const User = require('../models/users')
const APIFeatures = require('../utils/apiFeatures')
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


exports.getAllReqs = catchAsync(async (req, res, next) => {
    
        const request = await User.findById(req.user.id).populate(['cars', 'reimbursements', 'travelReqs'])
        
        if (!request) {
    return next(new AppError('No req found with that ID', 404))
    }

        res.status(200).json({
            status: 'success',
            data: {
                request
            }
        })
})
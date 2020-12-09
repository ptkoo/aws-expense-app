const APIFeatures = require('../utils/apiFeatures')
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.postPayment = catchAsync(async (req, res, next) => {
    const body = req.body
    res.status(200).json({
            status: 'success',
            data: {
                body
            }
})
})
const TravelReq = require('../models/travelRequests')
const APIFeatures = require('../utils/apiFeatures')
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


exports.createTravelReq = catchAsync(async (req, res, next) => {
    const travelReq = await TravelReq.create(req.body)

        res.status(201).json({
            status: 'success',
            data: {
                travelReq
            }
        })
})

exports.getAllTravelReqs = catchAsync(async (req, res, next) => {
 
        const features = new APIFeatures(TravelReq.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();

        const travelReq = await features.query
        
        res.status(200).json({
            status: 'success',
            data: {
                travelReq
            }
        })
})

exports.getTravelReq = catchAsync(async (req, res, next) => {
    
        const travelReq = await TravelReq.findById(req.params.id)
        
        if (!travelReq) {
    return next(new AppError('No req found with that ID', 404))
    }

        res.status(200).json({
            status: 'success',
            data: {
                travelReq
            }
        })
})

exports.updateTravelReq = catchAsync(async (req, res, next) => {
    const _id = req.params.id

    
        const travelReq = await TravelReq.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: false
        })

        if (!travelReq) {
    return next(new AppError('No req found with that ID', 404));
    }
        
        res.status(200).json({
            status: 'success',
            data: {
                travelReq
            }
        })    
})

exports.deleteTravelReq = catchAsync(async (req, res, next) => {
    const _id = req.params.id

    
        const travelReq = await TravelReq.findByIdAndDelete(_id)
        
        if (!travelReq) {
    return next(new AppError('No req found with that ID', 404));
    }

        res.status(204).json({
            status: 'success',
            data: null
        })
})
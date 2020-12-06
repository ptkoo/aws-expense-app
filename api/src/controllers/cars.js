const Car = require('../models/cars')
const APIFeatures = require('../utils/apiFeatures')
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


exports.createCar = catchAsync(async (req, res, next) => {
    const car = await Car.create(req.body)

        res.status(201).json({
            status: 'success',
            data: {
                car
            }
        })
})

exports.getAllCars = catchAsync(async (req, res, next) => {
 
        const features = new APIFeatures(Car.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();

        const car = await features.query
        
        res.status(200).json({
            status: 'success',
            data: {
                car
            }
        })
})

exports.getCar = catchAsync(async (req, res, next) => {
    
        const car = await Car.findById(req.params.id)
        
        if (!car) {
    return next(new AppError('No req found with that ID', 404))
    }

        res.status(200).json({
            status: 'success',
            data: {
                car
            }
        })
})

exports.updateCar = catchAsync(async (req, res, next) => {
    const _id = req.params.id

    
        const car = await Car.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: false
        })

        if (!car) {
    return next(new AppError('No req found with that ID', 404));
    }
        
        res.status(200).json({
            status: 'success',
            data: {
                car
            }
        })    
})

exports.deleteCar = catchAsync(async (req, res, next) => {
    const _id = req.params.id

    
        const car = await Car.findByIdAndDelete(_id)
        
        if (!car) {
    return next(new AppError('No req found with that ID', 404));
    }

        res.status(204).json({
            status: 'success',
            data: null
        })
})
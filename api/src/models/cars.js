const mongoose = require('mongoose')

const carSchema = new mongoose.Schema(
    {
        reqDate: {
            type: Date,
            default: Date.now(),
            select: false
        },
        description: {
            type: String,
            required: true
        },
        Amount: {
            type: Number,
            required: [true, 'Please enter the amount']
        },
        recommend: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        verify: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        approve: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        recommended: {
            type: Boolean,
            default: false
        },
        verified: {
            type: Boolean,
            default: false
        },
        approved: {
            type: Boolean,
            default: false
        },
        denied: {
            type: Boolean,
            default: false
        }
    }
)

const CAR = mongoose.model('CAR', carSchema)

module.exports = CAR
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
            required: true
        },
        recommend: {
            type: mongoose.Schema.userName,
            ref: 'User',
            required: true
        },
        verify: {
            type: mongoose.Schema.userName,
            ref: 'User',
            required: true
        },
        approve: {
            type: mongoose.Schema.userName,
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
        }
    }
)

const CAR = mongoose.model('CAR', carSchema)

module.exports = CAR
const mongoose = require('mongoose')

const travelRequestSchema = new mongoose.Schema(
    {
        requestorId: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        reqDate: {
            type: Date,
            default: Date.now(),
            select: false
        },
        travelType: {
            type: String,
            required: true,
            enum: ['INS', 'OUS', 'ITS']
        },
        departDate: {
            type: Date,
            required: true
        },
        returnDate: {
            type: Date,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        modeOfTravel: {
            type: String,
            required: true,
            enum: ['By Air', 'By Road', 'By Rail', 'By Ship']
        },
        vehicle: {
            type: String,
            required: true,
            enum: ['By Own Vehicle', 'Public Transportation', 'By Company Vehicle']
        },
        Amount: {
            type: Number,
            required: true
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
    },
    {
      toJSON: { virtuals: true},
      toObject: { virtuals: true}
    }
)

const TRAVEL = mongoose.model('TRAVEL', travelRequestSchema)

module.exports = TRAVEL
const mongoose = require('mongoose')

const reimbursementSchema = new mongoose.Schema(
    {
        requestorId: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        type: {
            type: String,
            default: 'reimbursements'
        },
        reqDate: {
            type: Date,
            default: new Date().getTime()
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
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

const REIMBURSEMENT = mongoose.model('REIMBURSEMENT', reimbursementSchema)

module.exports = REIMBURSEMENT
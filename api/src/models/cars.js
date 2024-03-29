const mongoose = require('mongoose')

const carSchema = new mongoose.Schema(
    {
        requestorId: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        type: {
            type: String,
            default: 'cars'
        },
        reqDate: {
            type: Date,
            default: new Date().getTime()
        },
        description: {
            type: String,
            required: true
        },
        paymentMethod: {
            type: String,
            enum: ['cash', 'AYA'],
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
        },
        paid: {
            type: Boolean,
            default: false
        }
    },
    {
      toJSON: { virtuals: true},
      toObject: { virtuals: true}
    }
)

carSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'recommend',
    select: 'userName'
  }).populate({
    path: 'verify',
    select: 'userName'
  }).populate({
      path: 'approve',
    select: 'userName'
  });
  next();
});


const CAR = mongoose.model('CAR', carSchema)

module.exports = CAR
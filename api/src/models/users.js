const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema(
    {
    userName: {
        type: String,
        required
    },
    department: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    approver: {
        type: Boolean,
        required: true
    },
    requestor: {
        type: Boolean,
        required: true
    },
    payment: {
        accountNo: {
            type: Number
        },
        password:{
            type: String
        }
    }
}
)

userSchema.statics.findByCredentials = async (userName, password) => {
    const user = await User.findOne({ userName })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

//Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
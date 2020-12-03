const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema(
    {
    userName: {
        type: String
    },
    department: {
        type: String
    },
    role: {
        type: String
    },
    password: {
        type: String
    },
    approver: {
        type: Boolean
    },
    requestor: {
        type: Boolean
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
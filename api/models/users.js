const mongoose = require('mongoose')

const User = mongoose.model('User', {
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
    }
})
const mongoose = require('mongoose')
const connectDatabase = require('../js/db')
connectDatabase()

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },
})

mongoose.model('users', UserSchema)

const User = mongoose.model('users', UserSchema)

module.exports = User
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: {
        type: String,
        required: [true, 'Must Include User ID']
    },
    username: {
        type: String,
        required: [true, 'Must Include Username']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);
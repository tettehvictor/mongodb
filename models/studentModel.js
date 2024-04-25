const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Student', studentSchema)
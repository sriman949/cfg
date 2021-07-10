const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type :String,
        required : true,
    },
    password : {
        type :String,
        required : true,
    },
    role : {
        type :Number,
        required : true,
    },
    email : {
        type :String,
        required : true,
    },
    dob : {
        type: String,
        required: true,
    },
    address : {
        type :String,
        required : true,
    },
    phone : {
        type: Number,
        min: 10,
        required: true,
    },
    description : {
        type :String,
    },
    enrolledAt : {
        type :Date,
        default: Date.now(),
    },
    programs : {
        type : [String],
    }
})


module.exports = mongoose.model('User' , userSchema);